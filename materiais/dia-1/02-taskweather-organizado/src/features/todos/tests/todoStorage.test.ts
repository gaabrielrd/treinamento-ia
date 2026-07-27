import { describe, it, expect, beforeEach } from 'vitest';
import { loadTodos, saveTodos, storageKeyFor } from '../services/todoStorage';
import { createTodo } from '../model/todo';

const ANA = 'ana@empresa.com';
const JOAO = 'joao@empresa.com';

describe('todoStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('devolve lista vazia quando o usuário não tem nada salvo', () => {
    expect(loadTodos(ANA)).toEqual([]);
  });

  // Critério: manter a tarefa após recarregar a página.
  it('guarda e recupera as tarefas do usuário', () => {
    const todo = createTodo('comprar pão');
    saveTodos(ANA, [todo]);

    expect(loadTodos(ANA)).toEqual([todo]);
  });

  // Critério: as tarefas de um usuário não aparecem para outro.
  it('separa as tarefas de usuários diferentes', () => {
    const daAna = createTodo('tarefa da Ana');
    const doJoao = createTodo('tarefa do João');

    saveTodos(ANA, [daAna]);
    saveTodos(JOAO, [doJoao]);

    expect(loadTodos(ANA)).toEqual([daAna]);
    expect(loadTodos(JOAO)).toEqual([doJoao]);
  });

  it('salvar as tarefas de um usuário não afeta as do outro', () => {
    const daAna = createTodo('tarefa da Ana');
    saveTodos(ANA, [daAna]);

    saveTodos(JOAO, []);

    expect(loadTodos(ANA)).toEqual([daAna]);
  });

  it('usa uma chave própria por usuário', () => {
    expect(storageKeyFor(ANA)).toBe('taskweather:todos:ana@empresa.com');
    expect(storageKeyFor(JOAO)).not.toBe(storageKeyFor(ANA));
  });

  it('ignora dados corrompidos sem quebrar a aplicação', () => {
    localStorage.setItem(storageKeyFor(ANA), '{ json invalido');
    expect(loadTodos(ANA)).toEqual([]);

    localStorage.setItem(storageKeyFor(ANA), '{"nao": "e uma lista"}');
    expect(loadTodos(ANA)).toEqual([]);

    localStorage.setItem(storageKeyFor(ANA), '[{"id": "1"}]');
    expect(loadTodos(ANA)).toEqual([]);
  });
});
