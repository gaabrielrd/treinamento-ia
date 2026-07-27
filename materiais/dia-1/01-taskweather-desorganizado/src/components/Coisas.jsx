import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { calcularTotal, tempC } from '../utils'
import { contarFeitas } from '../helpers'

// resumo + exportacao + dicas
export default function Coisas(props) {
  const [aberto, setAberto] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    const n = localStorage.getItem('tw:user')
    setNome(n)
  }, [props.usuario])

  const feitas = calcularTotal(props.tarefas)
  const feitas2 = contarFeitas(props.tarefas)

  function exportar() {
    const linhas = props.tarefas.map((x) => x.titulo + ';' + (x.feita ? 'sim' : 'nao'))
    const conteudo = 'titulo;feita\n' + linhas.join('\n')
    localStorage.setItem('export_csv', conteudo)
    alert('exportado no localStorage')
  }

  let dica = ''
  if (props.clima != null) {
    if (props.clima.temp > 28) {
      dica = 'muito calor, beba agua'
    } else if (props.clima.temp < 15) {
      dica = 'frio, leve um agasalho'
    } else {
      dica = 'clima ok'
    }
  }

  return (
    <div className="box" style={{ padding: 12, marginTop: 20, background: '#fff' }}>
      <button onClick={() => setAberto(!aberto)}>{aberto ? 'esconder' : 'mostrar'} resumo</button>
      {aberto ? (
        <div>
          <p>Ola {_.capitalize(nome)}</p>
          <p>
            feitas: {feitas} ({feitas2})
          </p>
          <p>total: {props.tarefas.length}</p>
          <p>{dica}</p>
          <p style={{ fontSize: 11, color: '#999' }}>{tempC(300).toFixed(1)}</p>
          <button onClick={exportar}>exportar</button>
        </div>
      ) : null}
    </div>
  )
}
