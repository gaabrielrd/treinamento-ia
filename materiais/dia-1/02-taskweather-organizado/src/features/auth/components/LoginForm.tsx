import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/shared/components';
import styles from './LoginForm.module.css';

export interface LoginFormProps {
  /** Recebe o e-mail digitado. Deve lançar erro quando o formato é inválido. */
  onSignIn: (email: string) => void;
}

export function LoginForm({ onSignIn }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      onSignIn(email);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível entrar.');
    }
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    // noValidate: a validação e a mensagem de erro são responsabilidade da
    // aplicação, não do navegador. Ver o comentário do campo abaixo.
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        {/*
          type="text" + inputMode="email" em vez de type="email": com
          type="email" o navegador bloqueia o envio e mostra a mensagem dele,
          que varia por navegador e idioma — e a validação da aplicação nunca
          roda. Assim o teclado de e-mail aparece no celular e a mensagem
          exibida é sempre a nossa.
        */}
        <input
          id="email"
          name="email"
          type="text"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
          aria-invalid={error !== null}
          autoComplete="email"
          placeholder="voce@empresa.com"
        />
      </div>

      <Button type="submit">Entrar</Button>

      <div aria-live="polite">{error && <p className={styles.error}>{error}</p>}</div>

      <p className={styles.hint}>
        Demonstração sem senha: o e-mail identifica a sessão e separa suas tarefas das de outras
        pessoas neste navegador.
      </p>
    </form>
  );
}
