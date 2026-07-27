import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  CITY_NOT_FOUND_MESSAGE,
  REQUEST_FAILED_MESSAGE,
  fetchWeatherByCity,
} from '../services/weatherApi';

const fetchMock = vi.fn<typeof fetch>();

/**
 * Resposta falsa com apenas o que o serviço usa (`ok` e `json`).
 * Os testes nunca acessam a internet: a rede é substituída por este duplo.
 */
function fakeResponse(payload: unknown, ok = true): Response {
  return {
    ok,
    status: ok ? 200 : 500,
    json: () => Promise.resolve(payload),
  } as unknown as Response;
}

const GEOCODING_PAYLOAD = {
  results: [{ name: 'São Paulo', latitude: -23.5475, longitude: -46.6361 }],
};

const FORECAST_PAYLOAD = {
  current: { time: '2026-07-27T10:00', temperature_2m: 21.4, wind_speed_10m: 9.2 },
};

describe('fetchWeatherByCity', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    fetchMock.mockReset();
  });

  // Critério: informar uma cidade válida mostra a temperatura atual.
  it('devolve o clima atual da cidade', async () => {
    fetchMock
      .mockResolvedValueOnce(fakeResponse(GEOCODING_PAYLOAD))
      .mockResolvedValueOnce(fakeResponse(FORECAST_PAYLOAD));

    const weather = await fetchWeatherByCity('São Paulo');

    expect(weather).toEqual({
      city: 'São Paulo',
      temperature: 21.4,
      windSpeed: 9.2,
      observedAt: '2026-07-27T10:00',
    });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  // Critério: cidade inexistente mostra mensagem de erro.
  it('avisa quando a cidade não é encontrada', async () => {
    fetchMock.mockResolvedValueOnce(fakeResponse({ results: [] }));

    await expect(fetchWeatherByCity('cidade-que-nao-existe')).rejects.toThrow(
      CITY_NOT_FOUND_MESSAGE,
    );
  });

  // Critério: falha na consulta mostra mensagem de erro.
  it('avisa quando a API responde com falha', async () => {
    fetchMock.mockResolvedValueOnce(fakeResponse(null, false));

    await expect(fetchWeatherByCity('São Paulo')).rejects.toThrow(REQUEST_FAILED_MESSAGE);
  });

  it('avisa quando a resposta vem em formato inesperado', async () => {
    fetchMock
      .mockResolvedValueOnce(fakeResponse(GEOCODING_PAYLOAD))
      .mockResolvedValueOnce(fakeResponse({ current: { temperature_2m: 'quente' } }));

    await expect(fetchWeatherByCity('São Paulo')).rejects.toThrow(REQUEST_FAILED_MESSAGE);
  });
});
