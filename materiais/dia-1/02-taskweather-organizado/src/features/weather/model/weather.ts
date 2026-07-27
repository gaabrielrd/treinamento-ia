export interface Weather {
  city: string;
  /** Temperatura atual em graus Celsius. */
  temperature: number;
  /** Velocidade do vento em km/h. */
  windSpeed: number;
  /** Momento da medição, no formato devolvido pela API. */
  observedAt: string;
}

/** Descrição simples da temperatura, para exibir junto do número. */
export function describeTemperature(temperature: number): string {
  if (temperature <= 15) return 'frio';
  if (temperature >= 28) return 'calor';
  return 'agradável';
}
