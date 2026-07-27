// Único ponto do projeto que sabe onde as tarefas são guardadas.
// Trocar localStorage por outro meio não afeta a tela.
//
// Cada usuário tem sua própria chave, derivada do e-mail da sessão.
// É isso que separa os dados de pessoas diferentes no mesmo navegador.
import type { Todo } from '../model/todo';

const STORAGE_PREFIX = 'taskweather:todos';

/** A chave de um usuário. Ex.: taskweather:todos:ana@empresa.com */
export function storageKeyFor(email: string): string {
  return `${STORAGE_PREFIX}:${email}`;
}

function isTodo(value: unknown): value is Todo {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.done === 'boolean' &&
    typeof candidate.createdAt === 'number'
  );
}

export function loadTodos(email: string): Todo[] {
  try {
    const raw = localStorage.getItem(storageKeyFor(email));
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isTodo);
  } catch (error) {
    console.warn('Não foi possível ler as tarefas salvas:', error);
    return [];
  }
}

export function saveTodos(email: string, todos: Todo[]): void {
  try {
    localStorage.setItem(storageKeyFor(email), JSON.stringify(todos));
  } catch (error) {
    console.warn('Não foi possível salvar as tarefas:', error);
  }
}
