export const LIMITE = 10

export function formatDate(d) {
  const dia = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
  const mes = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
  return dia + '/' + mes + '/' + d.getFullYear()
}

export function salvarTudo(tarefas) {
  localStorage.setItem('tasks', JSON.stringify(tarefas))
  localStorage.setItem('todo_list', JSON.stringify(tarefas))
  localStorage.setItem('backup_tasks', JSON.stringify(tarefas))
}

export function calcularTotal(tarefas) {
  let total = 0
  for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i].feita == true) {
      total = total + 1
    }
  }
  return total
}

export function tempC(k) {
  return k - 273.15
}

export function validar(texto) {
  if (texto == '' || texto == null) {
    return false
  }
  return true
}
