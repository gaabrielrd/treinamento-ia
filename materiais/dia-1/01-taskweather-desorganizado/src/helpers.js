// helpers gerais
export function formatarData(data) {
  var d = new Date(data)
  return d.toLocaleDateString('pt-BR')
}

export function capitalize(s) {
  if (!s) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function getTarefas() {
  const t = localStorage.getItem('tasks')
  if (t) {
    return JSON.parse(t)
  }
  const legado = localStorage.getItem('todo_list')
  if (legado) {
    return JSON.parse(legado)
  }
  return []
}

export function contarFeitas(lista) {
  return lista.filter((x) => x.feita).length
}

export function isMobile() {
  return window.innerWidth < 768
}
