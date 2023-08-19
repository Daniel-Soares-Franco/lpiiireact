import React from 'react';
import { criaAlunos, carregaAlunos } from './alunos';
import './App.css';

function App() {
  /*const [tarefas, setTarefas] = React.useState([])
  
  const removeTarefa = (idx) => {
    const novaLista = [...tarefas]
    novaLista.splice(idx, 1)
    setTarefas(novaLista)
  }

  const adicionaTarefa = () => {
    const novaTarefa = Math.floor(Math.random() * 10)
    setTarefas([...tarefas, novaTarefa]);
  }
  const [cor, setCor] = React.useState("cont1")
  const alteraCor = () => {
    setCor("cont2");
  }
  
  const inicio = {email: "email", password: "password", name: "name"}
    const [form, setForm] = React.useState(inicio)
    const atualizaForm = (e) => {
        const {name, value} = e.target;
        const novoForm = {...form, [name]: value};
        setForm(novoForm);
    }*/

  return (
    <div className="alunos">
      Nome: <input name='nome'></input>
      Curso: <input name='curso'></input>
      <button onClick={() => criaAlunos()}>Submit</button>
      <button onClick={() => carregaAlunos()}>Ver alunos</button>
    </div>
  )
}

export default App;
