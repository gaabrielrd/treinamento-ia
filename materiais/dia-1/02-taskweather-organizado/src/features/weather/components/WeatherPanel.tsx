import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/shared/components';
import type { AsyncStatus } from '@/shared/types';
import { describeTemperature } from '../model/weather';
import type { Weather } from '../model/weather';
import { fetchWeatherByCity, REQUEST_FAILED_MESSAGE } from '../services/weatherApi';
import styles from './WeatherPanel.module.css';

export function WeatherPanel() {
  const [city, setCity] = useState('São Paulo');
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function loadWeather(query: string) {
    setStatus('loading');
    setError(null);

    try {
      const result = await fetchWeatherByCity(query);
      setWeather(result);
      setStatus('success');
    } catch (err) {
      setWeather(null);
      setError(err instanceof Error ? err.message : REQUEST_FAILED_MESSAGE);
      setStatus('error');
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void loadWeather(city);
  }

  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="city" className={styles.srOnly}>
          Cidade
        </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Cidade"
          className={styles.input}
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Consultando...' : 'Consultar'}
        </Button>
      </form>

      {/* Os quatro estados da tela são explícitos: inicial, carregando, erro e sucesso. */}
      <div aria-live="polite" className={styles.result}>
        {status === 'idle' && <p className={styles.hint}>Informe uma cidade e consulte o clima.</p>}

        {status === 'loading' && <p className={styles.hint}>Consultando o clima...</p>}

        {status === 'error' && error && <p className={styles.error}>{error}</p>}

        {status === 'success' && weather && (
          <div>
            <p className={styles.city}>{weather.city}</p>
            <p className={styles.temperature}>
              {weather.temperature}°C
              <span className={styles.description}>
                {' '}
                ({describeTemperature(weather.temperature)})
              </span>
            </p>
            <p className={styles.detail}>Vento: {weather.windSpeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}
