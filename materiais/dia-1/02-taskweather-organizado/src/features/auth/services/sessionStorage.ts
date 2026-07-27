// Único ponto do projeto que sabe onde a sessão é guardada.
// Os componentes pedem e recebem a sessão sem conhecer o localStorage.
import type { Session } from '../model/session';

const STORAGE_KEY = 'taskweather:session';

function isSession(value: unknown): value is Session {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.email === 'string' && typeof candidate.signedInAt === 'number';
}

export function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    return isSession(parsed) ? parsed : null;
  } catch (error) {
    console.warn('Não foi possível ler a sessão salva:', error);
    return null;
  }
}

export function saveSession(session: Session): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch (error) {
    console.warn('Não foi possível salvar a sessão:', error);
  }
}

/**
 * Encerra a sessão. As tarefas do usuário permanecem guardadas sob a
 * chave dele — sair não apaga dados, apenas encerra o acesso atual.
 */
export function clearSession(): void {
  localStorage.removeItem(STORAGE_KEY);
}
