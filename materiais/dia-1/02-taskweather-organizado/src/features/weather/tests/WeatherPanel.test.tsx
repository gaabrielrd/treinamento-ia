import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderWithProviders, screen } from '@/test/render';
import { WeatherPanel } from '../components/WeatherPanel';
import { CITY_NOT_FOUND_MESSAGE } from '../services/weatherApi';

const fetchMock = vi.fn<typeof fetch>();

function fakeResponse(payload: unknown, ok = true): Response {
  return {
    ok,
    status: ok ? 200 : 500,
    json: () => Promise.resolve(payload),
  } as unknown as Response;
}

describe('WeatherPanel', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    fetchMock.mockReset();
  });

  it('começa no estado inicial, sem consultar nada', () => {
    renderWithProviders(<WeatherPanel />);

    expect(screen.getByText('Informe uma cidade e consulte o clima.')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  // Critério: informar uma cidade válida mostra a temperatura atual.
  it('mostra a temperatura da cidade consultada', async () => {
    fetchMock
      .mockResolvedValueOnce(
        fakeResponse({ results: [{ name: 'Curitiba', latitude: -25.4, longitude: -49.2 }] }),
      )
      .mockResolvedValueOnce(
        fakeResponse({
          current: { time: '2026-07-27T10:00', temperature_2m: 12, wind_speed_10m: 5 },
        }),
      );

    const { user } = renderWithProviders(<WeatherPanel />);
    await user.click(screen.getByRole('button', { name: 'Consultar' }));

    expect(await screen.findByText('Curitiba')).toBeInTheDocument();
    expect(screen.getByText(/12°C/)).toBeInTheDocument();
    expect(screen.getByText(/frio/)).toBeInTheDocument();
    expect(screen.getByText('Vento: 5 km/h')).toBeInTheDocument();
  });

  // Critério: cidade inexistente mostra mensagem de erro.
  it('mostra mensagem de erro quando a cidade não existe', async () => {
    fetchMock.mockResolvedValueOnce(fakeResponse({ results: [] }));

    const { user } = renderWithProviders(<WeatherPanel />);
    await user.click(screen.getByRole('button', { name: 'Consultar' }));

    expect(await screen.findByText(CITY_NOT_FOUND_MESSAGE)).toBeInTheDocument();
  });
});
