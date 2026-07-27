// App: apenas layout e composição das features. Sem regra de negócio aqui.
import { LoginForm, useSession } from '@/features/auth';
import { TodoList } from '@/features/todos';
import { WeatherPanel } from '@/features/weather';
import { Button } from '@/shared/components';
import styles from './App.module.css';

export function App() {
  const { session, signIn, signOut } = useSession();

  if (!session) {
    return (
      <main className={styles.app}>
        <header className={styles.header}>
          <h1>TaskWeather</h1>
          <p className={styles.subtitle}>Suas tarefas e o clima em uma única página.</p>
        </header>

        <section className={styles.section}>
          <h2>Entrar</h2>
          <LoginForm onSignIn={signIn} />
        </section>
      </main>
    );
  }

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1>TaskWeather</h1>
          <div className={styles.userBox}>
            <span>{session.email}</span>
            <Button variant="secondary" onClick={signOut}>
              Sair
            </Button>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Clima</h2>
        <WeatherPanel />
      </section>

      <section className={styles.section}>
        <h2>Tarefas</h2>
        {/*
          O `key` faz o React remontar a lista quando o e-mail muda, garantindo
          que as tarefas carregadas sejam sempre as do usuário da sessão atual.
        */}
        <TodoList key={session.email} userEmail={session.email} />
      </section>
    </main>
  );
}
