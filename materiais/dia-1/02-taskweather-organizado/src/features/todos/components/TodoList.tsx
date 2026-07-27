import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/shared/components';
import { countPending, createTodo, toggleTodo } from '../model/todo';
import type { Todo } from '../model/todo';
import { loadTodos, saveTodos } from '../services/todoStorage';
import styles from './TodoList.module.css';

export interface TodoListProps {
  /** E-mail da sessão. Define de quem são as tarefas exibidas e salvas. */
  userEmail: string;
}

export function TodoList({ userEmail }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos(userEmail));
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  /** Atualiza a tela e o armazenamento juntos, num só lugar. */
  function commit(nextTodos: Todo[]) {
    saveTodos(userEmail, nextTodos);
    setTodos(nextTodos);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const todo = createTodo(title);
      commit([todo, ...todos]);
      setTitle('');
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível criar a tarefa.');
    }
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleToggle(id: string) {
    commit(toggleTodo(todos, id));
  }

  function handleRemove(id: string) {
    commit(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="new-todo" className={styles.srOnly}>
            Nova tarefa
          </label>
          <input
            id="new-todo"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Nova tarefa..."
            className={styles.input}
            aria-invalid={error !== null}
          />
          <Button type="submit">Adicionar</Button>
        </div>
        <div aria-live="polite">{error && <p className={styles.error}>{error}</p>}</div>
      </form>

      <div aria-live="polite">
        {todos.length === 0 ? (
          <p className={styles.emptyState}>Nenhuma tarefa ainda. Crie a primeira!</p>
        ) : (
          <>
            <p className={styles.summary}>
              {countPending(todos)} de {todos.length} pendentes
            </p>
            <ul className={styles.list}>
              {todos.map((todo) => (
                <li key={todo.id} className={styles.item}>
                  <label className={styles.itemLabel}>
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => handleToggle(todo.id)}
                    />
                    <span className={todo.done ? styles.doneTitle : undefined}>{todo.title}</span>
                  </label>
                  <Button
                    variant="secondary"
                    onClick={() => handleRemove(todo.id)}
                    aria-label={`Remover tarefa: ${todo.title}`}
                  >
                    Remover
                  </Button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
