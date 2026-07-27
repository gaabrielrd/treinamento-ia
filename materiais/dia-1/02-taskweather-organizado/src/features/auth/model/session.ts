/**
 * Identificação do usuário na versão de demonstração.
 *
 * IMPORTANTE: isto NÃO é autenticação. Não há senha, servidor nem verificação
 * de identidade — qualquer pessoa pode digitar qualquer e-mail e entrar.
 *
 * O e-mail serve a dois propósitos:
 * 1. identificar a sessão atual;
 * 2. separar os dados de cada usuário no armazenamento local.
 *
 * Ver "Não escopo" em docs/prd.md.
 */

export interface Session {
  email: string;
  signedInAt: number;
}

export const INVALID_EMAIL_MESSAGE = 'Informe um e-mail válido.';

// Validação de formato apenas. Não verifica se o e-mail existe de verdade.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Normaliza o e-mail para que ele funcione como chave estável de dados. */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(normalizeEmail(email));
}

/**
 * Cria a sessão a partir do e-mail informado.
 * Lança um erro com mensagem exibível quando o formato é inválido.
 */
export function createSession(email: string): Session {
  const normalizedEmail = normalizeEmail(email);

  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    throw new Error(INVALID_EMAIL_MESSAGE);
  }

  return {
    email: normalizedEmail,
    signedInAt: Date.now(),
  };
}
