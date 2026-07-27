import { describe, it, expect, beforeEach } from 'vitest';
import { clearSession, loadSession, saveSession } from '../services/sessionStorage';

const STORAGE_KEY = 'taskweather:session';

describe('sessionStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('não devolve sessão quando nada foi salvo', () => {
    expect(loadSession()).toBeNull();
  });

  // Critério: atualizar a página mantém a sessão.
  it('guarda e recupera a sessão', () => {
    saveSession({ email: 'ana@empresa.com', signedInAt: 123 });

    expect(loadSession()).toEqual({ email: 'ana@empresa.com', signedInAt: 123 });
  });

  // Critério: "Sair" retorna à tela de login.
  it('apaga a sessão no logout', () => {
    saveSession({ email: 'ana@empresa.com', signedInAt: 123 });
    clearSession();

    expect(loadSession()).toBeNull();
  });

  // Sair não pode apagar as tarefas do usuário.
  it('não toca nas tarefas guardadas ao encerrar a sessão', () => {
    const todosKey = 'taskweather:todos:ana@empresa.com';
    localStorage.setItem(todosKey, '[]');
    saveSession({ email: 'ana@empresa.com', signedInAt: 123 });

    clearSession();

    expect(localStorage.getItem(todosKey)).toBe('[]');
  });

  it('ignora dados corrompidos sem quebrar a aplicação', () => {
    localStorage.setItem(STORAGE_KEY, '{ json invalido');
    expect(loadSession()).toBeNull();

    localStorage.setItem(STORAGE_KEY, '{"email": 42}');
    expect(loadSession()).toBeNull();
  });
});
