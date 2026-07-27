import { describe, it, expect } from 'vitest';
import {
  INVALID_EMAIL_MESSAGE,
  createSession,
  isValidEmail,
  normalizeEmail,
} from '../model/session';

describe('identificação por e-mail', () => {
  // Critério: informar um e-mail válido dá acesso.
  it('cria a sessão com o e-mail informado', () => {
    const session = createSession('ana@empresa.com');

    expect(session.email).toBe('ana@empresa.com');
    expect(session.signedInAt).toBeLessThanOrEqual(Date.now());
  });

  // O e-mail é a chave dos dados: precisa ser estável.
  it('normaliza espaços e maiúsculas', () => {
    expect(createSession('  Ana@Empresa.COM  ').email).toBe('ana@empresa.com');
    expect(normalizeEmail(' JOAO@X.COM ')).toBe('joao@x.com');
  });

  // Critério: e-mail inválido mostra mensagem e não dá acesso.
  it('recusa e-mail vazio', () => {
    expect(() => createSession('')).toThrow(INVALID_EMAIL_MESSAGE);
    expect(() => createSession('   ')).toThrow(INVALID_EMAIL_MESSAGE);
  });

  it('recusa e-mail em formato inválido', () => {
    expect(() => createSession('ana')).toThrow(INVALID_EMAIL_MESSAGE);
    expect(() => createSession('ana@')).toThrow(INVALID_EMAIL_MESSAGE);
    expect(() => createSession('ana@empresa')).toThrow(INVALID_EMAIL_MESSAGE);
    expect(() => createSession('ana empresa@x.com')).toThrow(INVALID_EMAIL_MESSAGE);
  });

  describe('isValidEmail', () => {
    it('aceita formatos válidos', () => {
      expect(isValidEmail('ana@empresa.com')).toBe(true);
      expect(isValidEmail('ANA.SILVA@empresa.com.br')).toBe(true);
    });

    it('recusa formatos inválidos', () => {
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('ana@empresa')).toBe(false);
    });
  });
});
