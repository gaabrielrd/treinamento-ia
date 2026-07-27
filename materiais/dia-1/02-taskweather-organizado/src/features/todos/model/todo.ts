// Regras de negócio das tarefas. Sem React e sem armazenamento aqui.

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
}

export const EMPTY_TITLE_MESSAGE = 'Informe um título para a tarefa.';

/** Devolve o título sem espaços sobrando. Lança erro se estiver vazio. */
export function validateTitle(title: string): string {
  const trimmed = title.trim();

  if (!trimmed) {
    throw new Error(EMPTY_TITLE_MESSAGE);
  }

  return trimmed;
}

export function createTodo(title: string): Todo {
  return {
    id: crypto.randomUUID(),
    title: validateTitle(title),
    done: false,
    createdAt: Date.now(),
  };
}

/** Devolve uma nova lista com a tarefa indicada concluída/reaberta. */
export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
}

export function countPending(todos: Todo[]): number {
  return todos.filter((todo) => !todo.done).length;
}
