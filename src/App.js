import React from 'react';
<<<<<<< HEAD
import MyNavbar from './shared/components/my-navbar';
import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'

import Tarefas from './pages/tarefas/Tarefas';
import Formulario from './pages/formulario/Formulario';
import Alunos from './pages/alunos/Alunos';
import Aluno from './pages/aluno/Aluno';



function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Tarefas />} />
        <Route path='/form' element={<Formulario />} />
        <Route path='/alunos' element={<Alunos />} />
        <Route path='/alunos/:id' element={<Aluno />} />
             
      </Routes>
=======
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
>>>>>>> 3cbff41a42f37cfa496a293bdb22592b6c7bebc4
    </div>
  )
}

export default App;
