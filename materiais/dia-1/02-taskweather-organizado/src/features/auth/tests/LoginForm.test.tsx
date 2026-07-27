import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders, screen } from '@/test/render';
import { LoginForm } from '../components/LoginForm';
import { INVALID_EMAIL_MESSAGE, createSession } from '../model/session';

describe('LoginForm', () => {
  // Critério: informar um e-mail válido dá acesso.
  it('entra com um e-mail válido', async () => {
    const onSignIn = vi.fn();
    const { user } = renderWithProviders(<LoginForm onSignIn={onSignIn} />);

    await user.type(screen.getByLabelText('E-mail'), 'ana@empresa.com');
    await user.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(onSignIn).toHaveBeenCalledWith('ana@empresa.com');
    expect(screen.queryByText(INVALID_EMAIL_MESSAGE)).not.toBeInTheDocument();
  });

  // A tela não pede senha: não existe autenticação nesta versão.
  it('não apresenta campo de senha', () => {
    renderWithProviders(<LoginForm onSignIn={vi.fn()} />);

    expect(screen.queryByLabelText('Senha')).not.toBeInTheDocument();
  });

  // Critério: e-mail inválido mostra mensagem e não dá acesso.
  it('mostra mensagem quando o e-mail é inválido', async () => {
    const { user } = renderWithProviders(<LoginForm onSignIn={createSession} />);

    await user.type(screen.getByLabelText('E-mail'), 'ana');
    await user.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(screen.getByText(INVALID_EMAIL_MESSAGE)).toBeInTheDocument();
  });

  it('mostra mensagem quando o campo está vazio', async () => {
    const { user } = renderWithProviders(<LoginForm onSignIn={createSession} />);

    await user.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(screen.getByText(INVALID_EMAIL_MESSAGE)).toBeInTheDocument();
  });
});
