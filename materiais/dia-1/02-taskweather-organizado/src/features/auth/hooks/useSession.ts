import { useState } from 'react';
import { createSession } from '../model/session';
import type { Session } from '../model/session';
import { clearSession, loadSession, saveSession } from '../services/sessionStorage';

/**
 * Mantém a sessão atual da aplicação.
 * A sessão é lida do armazenamento na primeira renderização, o que faz a
 * pessoa continuar logada depois de atualizar a página.
 */
export function useSession() {
  const [session, setSession] = useState<Session | null>(() => loadSession());

  /** Entra na aplicação. Lança erro quando o e-mail é inválido. */
  function signIn(email: string): void {
    const nextSession = createSession(email);
    saveSession(nextSession);
    setSession(nextSession);
  }

  function signOut(): void {
    clearSession();
    setSession(null);
  }

  return { session, signIn, signOut };
}
