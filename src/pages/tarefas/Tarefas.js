import React from 'react'
import PropTypes from 'prop-types'
import Tarefa from './components/tarefa'


function Tarefas(props) {
    const [tarefas, setTarefas] = React.useState([])
  
    const removeTarefa = (idx) => {
      const novaLista = [...tarefas]
      novaLista.splice(idx, 1)
      setTarefas(novaLista)
    }
  
    const adicionaTarefa = () => {
      const novaTarefa = Math.floor(Math.random() * 10)
      setTarefas([...tarefas, novaTarefa]);
    }
  
    return (
      <div>
        <h1>Tarefas</h1>
        <hr />
        {tarefas.map((tarefa, index) => 
        <Tarefa removeTarefa={removeTarefa} index={index}  key={index} value={tarefa} />
        )}
        <button onClick={adicionaTarefa} >Adiciona tarefa</button>
      </div>
    )
}


export default Tarefas
