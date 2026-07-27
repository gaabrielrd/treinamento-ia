import { describe, it, expect } from 'vitest';
import {
  EMPTY_TITLE_MESSAGE,
  countPending,
  createTodo,
  toggleTodo,
  validateTitle,
} from '../model/todo';

describe('modelo de tarefas', () => {
  describe('validateTitle', () => {
    // Critério: rejeitar título vazio.
    it('recusa título vazio', () => {
      expect(() => validateTitle('')).toThrow(EMPTY_TITLE_MESSAGE);
      expect(() => validateTitle('    ')).toThrow(EMPTY_TITLE_MESSAGE);
    });

    it('remove espaços sobrando', () => {
      expect(validateTitle('  comprar pão  ')).toBe('comprar pão');
    });
  });

  describe('createTodo', () => {
    it('cria a tarefa aberta e com identificador próprio', () => {
      const todo = createTodo('comprar pão');

      expect(todo.title).toBe('comprar pão');
      expect(todo.done).toBe(false);
      expect(todo.id).not.toBe('');
      expect(todo.createdAt).toBeLessThanOrEqual(Date.now());
    });
  });

  describe('toggleTodo', () => {
    // Critério: marcar e desmarcar uma tarefa como concluída.
    it('alterna apenas a tarefa indicada', () => {
      const first = createTodo('primeira');
      const second = createTodo('segunda');

      const afterFirstClick = toggleTodo([first, second], first.id);
      expect(afterFirstClick[0]?.done).toBe(true);
      expect(afterFirstClick[1]?.done).toBe(false);

      const afterSecondClick = toggleTodo(afterFirstClick, first.id);
      expect(afterSecondClick[0]?.done).toBe(false);
    });
  });

  describe('countPending', () => {
    it('conta somente as tarefas em aberto', () => {
      const first = createTodo('a');
      const second = createTodo('b');
      const todos = [first, second];

      expect(countPending(todos)).toBe(2);
      expect(countPending(toggleTodo(todos, first.id))).toBe(1);
    });
  });
});
