/**
 * Acesso à API de clima. Todo o `fetch` da feature fica aqui:
 * o componente chama este serviço e não conhece URLs nem formatos de resposta.
 *
 * API: Open-Meteo (pública, sem chave de acesso).
 */
import type { Weather } from '../model/weather';

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

export const CITY_NOT_FOUND_MESSAGE = 'Cidade não encontrada. Confira o nome e tente novamente.';
export const REQUEST_FAILED_MESSAGE = 'Não foi possível consultar o clima agora. Tente novamente.';

interface FoundCity {
  name: string;
  latitude: number;
  longitude: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/** Converte o nome da cidade em coordenadas. */
async function findCity(city: string): Promise<FoundCity> {
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(REQUEST_FAILED_MESSAGE);
  }

  const payload = (await response.json()) as unknown;

  if (!isRecord(payload)) {
    throw new Error(REQUEST_FAILED_MESSAGE);
  }

  const results = payload.results;

  if (!Array.isArray(results) || results.length === 0) {
    throw new Error(CITY_NOT_FOUND_MESSAGE);
  }

  const first = results[0] as unknown;

  if (
    !isRecord(first) ||
    typeof first.name !== 'string' ||
    typeof first.latitude !== 'number' ||
    typeof first.longitude !== 'number'
  ) {
    throw new Error(CITY_NOT_FOUND_MESSAGE);
  }

  return { name: first.name, latitude: first.latitude, longitude: first.longitude };
}

/**
 * Consulta o clima atual de uma cidade.
 * Lança um erro com mensagem exibível quando a cidade não existe ou a
 * consulta falha (rede indisponível, resposta inesperada, etc.).
 */
export async function fetchWeatherByCity(city: string): Promise<Weather> {
  const foundCity = await findCity(city);

  const url = `${FORECAST_URL}?latitude=${String(foundCity.latitude)}&longitude=${String(
    foundCity.longitude,
  )}&current=temperature_2m,wind_speed_10m`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(REQUEST_FAILED_MESSAGE);
  }

  const payload = (await response.json()) as unknown;

  if (!isRecord(payload)) {
    throw new Error(REQUEST_FAILED_MESSAGE);
  }

  const current = payload.current;

  if (
    !isRecord(current) ||
    typeof current.temperature_2m !== 'number' ||
    typeof current.wind_speed_10m !== 'number' ||
    typeof current.time !== 'string'
  ) {
    throw new Error(REQUEST_FAILED_MESSAGE);
  }

  return {
    city: foundCity.name,
    temperature: current.temperature_2m,
    windSpeed: current.wind_speed_10m,
    observedAt: current.time,
  };
}
