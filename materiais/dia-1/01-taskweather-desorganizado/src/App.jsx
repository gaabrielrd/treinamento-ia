import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
import { formatDate, LIMITE, salvarTudo } from './utils'
import { formatarData, capitalize, getTarefas } from './helpers'
import Coisas from './components/Coisas'

// TODO: mover isso pra um lugar melhor depois
const WEATHER_TOKEN = 'DEMO-1234-TROCAR-DEPOIS'

export default function App() {
  // estado geral da aplicacao
  const [data, setData] = useState({
    logado: false,
    email: '',
    erroLogin: '',
    tarefas: [],
    novaTarefa: '',
    cidade: 'Sao Paulo',
    clima: null,
    carregando: false,
    filtro: 'todas',
    contador: 0
  })

  // carrega tudo que estiver salvo
  useEffect(() => {
    var u = localStorage.getItem('tw:user')
    var t = localStorage.getItem('tasks')
    var legado = localStorage.getItem('todo_list')

    var tarefas = []
    if (t) {
      try {
        tarefas = JSON.parse(t)
      } catch (e) {
        console.log('erro')
      }
    } else if (legado) {
      tarefas = JSON.parse(legado)
    }

    if (u != null) {
      setData({ ...data, logado: true, email: u, tarefas: tarefas })
    } else {
      setData({ ...data, tarefas: tarefas })
    }
  }, [])

  // busca o clima
  useEffect(() => {
    if (data.logado == false) return

    setData((d) => ({ ...d, carregando: true }))

    fetch(
      'https://geocoding-api.open-meteo.com/v1/search?name=' +
        data.cidade +
        '&count=1&language=pt&format=json'
    )
      .then((r) => r.json())
      .then((geo) => {
        const lat = geo.results[0].latitude
        const lon = geo.results[0].longitude
        return fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=' +
            lat +
            '&longitude=' +
            lon +
            '&current=temperature_2m,wind_speed_10m'
        )
      })
      .then((r) => r.json())
      .then((json) => {
        setData((d) => ({
          ...d,
          clima: {
            temp: json.current.temperature_2m,
            vento: json.current.wind_speed_10m,
            hora: json.current.time
          },
          carregando: false
        }))
        localStorage.setItem('ultimo_clima', JSON.stringify(json.current))
      })
      .catch((e) => {
        console.log('deu erro no clima', e)
      })
  }, [data.logado, data.cidade])

  function entrar() {
    if (data.email.length > 0) {
      localStorage.setItem('tw:user', data.email)
      localStorage.setItem('logado', 'sim')
      setData({ ...data, logado: true, erroLogin: '' })
    } else {
      setData({ ...data, erroLogin: 'errado' })
    }
  }

  function sair() {
    localStorage.removeItem('tw:user')
    localStorage.removeItem('logado')
    setData({ ...data, logado: false, email: '', clima: null })
  }

  function salvarTask() {
    if (data.novaTarefa.length > 0) {
      const nova = {
        id: Math.random().toString(36).substring(7),
        titulo: data.novaTarefa,
        feita: false,
        criadaEm: new Date().getTime()
      }
      const novas = [nova, ...data.tarefas]
      localStorage.setItem('tasks', JSON.stringify(novas))
      localStorage.setItem('todo_list', JSON.stringify(novas))
      setData({ ...data, tarefas: novas, novaTarefa: '', contador: data.contador + 1 })
    }
  }

  function handleClick2(id) {
    const novas = data.tarefas.map((x) => {
      if (x.id == id) {
        return { ...x, feita: !x.feita }
      }
      return x
    })
    localStorage.setItem('tasks', JSON.stringify(novas))
    localStorage.setItem('todo_list', JSON.stringify(novas))
    setData({ ...data, tarefas: novas })
  }

  function remover(id) {
    const novas = data.tarefas.filter((x) => x.id != id)
    localStorage.setItem('tasks', JSON.stringify(novas))
    setData({ ...data, tarefas: novas })
  }

  // function limparTudo() {
  //   localStorage.clear()
  //   setData({ ...data, tarefas: [] })
  // }

  var visiveis = data.tarefas
  if (data.filtro == 'abertas') {
    visiveis = data.tarefas.filter((x) => !x.feita)
  }
  if (data.filtro == 'feitas') {
    visiveis = data.tarefas.filter((x) => x.feita)
  }

  if (!data.logado) {
    return (
      <div className="box" style={{ maxWidth: 400, margin: '80px auto', padding: 20 }}>
        <h1 className="titulo">TaskWeather</h1>
        <p>Entre com seu email</p>
        <input
          placeholder="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ display: 'block', width: '100%', marginBottom: 8, padding: 6 }}
        />
        <button onClick={entrar} style={{ background: '#646cff', color: '#fff', padding: '8px 16px' }}>
          Entrar
        </button>
        {data.erroLogin != '' ? <p style={{ color: 'red' }}>{data.erroLogin}</p> : null}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 className="titulo">TaskWeather</h1>
        <div>
          <span>{capitalize(data.email)}</span>{' '}
          <button onClick={sair} className="btn2">
            sair
          </button>
        </div>
      </div>

      <div className="box" style={{ padding: 12, marginBottom: 20, background: '#fff' }}>
        <h3>Clima</h3>
        <input
          value={data.cidade}
          onChange={(e) => setData({ ...data, cidade: e.target.value })}
          style={{ padding: 6 }}
        />
        {data.carregando ? <p>carregando...</p> : null}
        {data.clima != null ? (
          <div>
            <p style={{ fontSize: 32, margin: 0 }}>{data.clima.temp}°C</p>
            <p>vento: {data.clima.vento} km/h</p>
            <p>atualizado: {moment(data.clima.hora).format('DD/MM/YYYY HH:mm')}</p>
            <p style={{ fontSize: 11, color: '#999' }}>
              {formatDate(new Date())} / {formatarData(new Date())}
            </p>
          </div>
        ) : null}
      </div>

      <div className="box" style={{ padding: 12, background: '#fff' }}>
        <h3>Tarefas ({data.tarefas.length})</h3>
        <input
          placeholder="nova tarefa"
          value={data.novaTarefa}
          onChange={(e) => setData({ ...data, novaTarefa: e.target.value })}
          onKeyDown={(e) => {
            if (e.key == 'Enter') salvarTask()
          }}
          style={{ padding: 6, width: '70%' }}
        />
        <button onClick={salvarTask} style={{ background: '#646cff', color: '#fff', padding: '7px 14px' }}>
          add
        </button>

        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <button onClick={() => setData({ ...data, filtro: 'todas' })}>todas</button>
          <button onClick={() => setData({ ...data, filtro: 'abertas' })}>abertas</button>
          <button onClick={() => setData({ ...data, filtro: 'feitas' })}>feitas</button>
        </div>

        {visiveis.length == 0 ? <p>vazio</p> : null}

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {visiveis.map((x) => (
            <li key={x.id} style={{ padding: 6, borderBottom: '1px solid #eee' }}>
              <input type="checkbox" checked={x.feita} onChange={() => handleClick2(x.id)} />
              <span style={{ textDecoration: x.feita ? 'line-through' : 'none' }}>{x.titulo}</span>
              <span style={{ fontSize: 11, color: '#999' }}> {formatDate(new Date(x.criadaEm))}</span>
              <button onClick={() => remover(x.id)} style={{ float: 'right' }}>
                x
              </button>
            </li>
          ))}
        </ul>

        {data.tarefas.length > LIMITE ? <p>muitas tarefas!</p> : null}
      </div>

      <Coisas tarefas={data.tarefas} clima={data.clima} usuario={data.email} />
    </div>
  )
}
