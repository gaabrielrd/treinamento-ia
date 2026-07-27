import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/render';
import type { UserEvent } from '@testing-library/user-event';
import { App } from '../App';

const ANA = 'ana@empresa.com';
const JOAO = 'joao@empresa.com';

async function signIn(user: UserEvent, email: string) {
  await user.type(screen.getByLabelText('E-mail'), email);
  await user.click(screen.getByRole('button', { name: 'Entrar' }));
}

async function addTodo(user: UserEvent, title: string) {
  await user.type(screen.getByLabelText('Nova tarefa'), title);
  await user.click(screen.getByRole('button', { name: 'Adicionar' }));
}

describe('App', () => {
  it('começa na tela de login', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tarefas' })).not.toBeInTheDocument();
  });

  // Critério: informar um e-mail válido dá acesso.
  it('mostra tarefas e clima depois de entrar', async () => {
    const { user } = renderWithProviders(<App />);

    await signIn(user, ANA);

    expect(screen.getByRole('heading', { name: 'Tarefas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Clima' })).toBeInTheDocument();
    expect(screen.getByText(ANA)).toBeInTheDocument();
  });

  // Critério: e-mail inválido mostra mensagem e não dá acesso.
  it('não entra com e-mail inválido', async () => {
    const { user } = renderWithProviders(<App />);

    await signIn(user, 'ana');

    expect(screen.getByText('Informe um e-mail válido.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tarefas' })).not.toBeInTheDocument();
  });

  // Critério: atualizar a página mantém a sessão.
  it('continua logado ao remontar a aplicação', async () => {
    const { user, unmount } = renderWithProviders(<App />);

    await signIn(user, ANA);
    unmount();

    renderWithProviders(<App />);

    expect(screen.getByRole('heading', { name: 'Tarefas' })).toBeInTheDocument();
    expect(screen.getByText(ANA)).toBeInTheDocument();
  });

  // Critério: "Sair" retorna à tela de login.
  it('volta para o login ao sair', async () => {
    const { user } = renderWithProviders(<App />);

    await signIn(user, ANA);
    await user.click(screen.getByRole('button', { name: 'Sair' }));

    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tarefas' })).not.toBeInTheDocument();
  });

  // Critério: as tarefas de um usuário não aparecem para outro.
  it('separa as tarefas de cada e-mail', async () => {
    const { user } = renderWithProviders(<App />);

    // Ana cria uma tarefa e sai.
    await signIn(user, ANA);
    await addTodo(user, 'tarefa da Ana');
    expect(screen.getByText('tarefa da Ana')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Sair' }));

    // João entra e não vê nada da Ana.
    await signIn(user, JOAO);
    expect(screen.queryByText('tarefa da Ana')).not.toBeInTheDocument();
    expect(screen.getByText('Nenhuma tarefa ainda. Crie a primeira!')).toBeInTheDocument();

    // João cria a dele e sai.
    await addTodo(user, 'tarefa do João');
    await user.click(screen.getByRole('button', { name: 'Sair' }));

    // Ana volta e encontra a sua, e só a sua.
    await signIn(user, ANA);
    expect(screen.getByText('tarefa da Ana')).toBeInTheDocument();
    expect(screen.queryByText('tarefa do João')).not.toBeInTheDocument();
  });

  // O e-mail é a chave dos dados: maiúsculas não podem criar um segundo usuário.
  it('trata o mesmo e-mail em maiúsculas como o mesmo usuário', async () => {
    const { user } = renderWithProviders(<App />);

    await signIn(user, ANA);
    await addTodo(user, 'tarefa da Ana');
    await user.click(screen.getByRole('button', { name: 'Sair' }));

    await signIn(user, 'ANA@Empresa.com');

    expect(screen.getByText('tarefa da Ana')).toBeInTheDocument();
  });
});
