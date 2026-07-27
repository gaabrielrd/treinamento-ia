import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/render';
import { TodoList } from '../components/TodoList';
import { EMPTY_TITLE_MESSAGE } from '../model/todo';

describe('TodoList', () => {
  it('mostra o estado vazio quando não há tarefas', () => {
    renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    expect(screen.getByText('Nenhuma tarefa ainda. Crie a primeira!')).toBeInTheDocument();
  });

  // Critério: mostrar a tarefa criada.
  it('cria a tarefa e a exibe na lista', async () => {
    const { user } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.type(screen.getByLabelText('Nova tarefa'), 'comprar pão');
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(screen.getByText('comprar pão')).toBeInTheDocument();
    expect(screen.getByText('1 de 1 pendentes')).toBeInTheDocument();
  });

  // Critério: rejeitar título vazio.
  it('recusa título vazio e mantém a lista intacta', async () => {
    const { user } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(screen.getByText(EMPTY_TITLE_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText('Nenhuma tarefa ainda. Crie a primeira!')).toBeInTheDocument();
  });

  // Critério: manter a tarefa após recarregar a página.
  it('mantém a tarefa depois de remontar a tela', async () => {
    const { user, unmount } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.type(screen.getByLabelText('Nova tarefa'), 'comprar pão');
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));
    unmount();

    renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    expect(screen.getByText('comprar pão')).toBeInTheDocument();
  });

  // Critério: marcar a tarefa como concluída.
  it('conclui a tarefa ao marcar a caixa de seleção', async () => {
    const { user } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.type(screen.getByLabelText('Nova tarefa'), 'comprar pão');
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));
    await user.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText('0 de 1 pendentes')).toBeInTheDocument();
  });

  it('remove a tarefa da lista', async () => {
    const { user } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.type(screen.getByLabelText('Nova tarefa'), 'comprar pão');
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));
    await user.click(screen.getByRole('button', { name: 'Remover tarefa: comprar pão' }));

    expect(screen.getByText('Nenhuma tarefa ainda. Crie a primeira!')).toBeInTheDocument();
  });

  // Critério: as tarefas de um usuário não aparecem para outro.
  it('mostra apenas as tarefas do e-mail recebido', async () => {
    const { user, unmount } = renderWithProviders(<TodoList userEmail="ana@empresa.com" />);

    await user.type(screen.getByLabelText('Nova tarefa'), 'tarefa da Ana');
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));
    unmount();

    renderWithProviders(<TodoList userEmail="joao@empresa.com" />);

    expect(screen.queryByText('tarefa da Ana')).not.toBeInTheDocument();
    expect(screen.getByText('Nenhuma tarefa ainda. Crie a primeira!')).toBeInTheDocument();
  });
});
