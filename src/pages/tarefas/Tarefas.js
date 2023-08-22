import React from 'react'
import Tarefa from './components/Tarefa'
import MyBackdrop from '../../shared/components/my-backdrop'
import { CSSTransition } from 'react-transition-group'


function Tarefas(props) {
    const [tarefas, setTarefas] = React.useState([])
    const [show, setShow] = React.useState(false)
  
    const removeTarefa = (idx) => {
      const novaLista = [...tarefas]
      novaLista.splice(idx, 1)
      setTarefas(novaLista)
    }
  
    const adicionaTarefa = () => {
      const novaTarefa = Math.floor(Math.random() * 10)
      setTimeout(() =>setTarefas([...tarefas, novaTarefa]), 2000 );
      setShow(true);
    }
  
    return (
      <div>
        <h1 style={{color: "red"}}>Tarefas</h1>
        <hr />
        {/*
        <CSSTransition in={show} timeout={500}  unmountOnExit>
        <MyBackdrop show={true} />
        </CSSTransition>
    */}
        {tarefas.map((tarefa, index) => 
        <Tarefa removeTarefa={removeTarefa} index={index}  key={index} value={tarefa} />
        )}
        <button onClick={adicionaTarefa} >Adiciona tarefa</button>
      </div>
    )
}


export default Tarefas
