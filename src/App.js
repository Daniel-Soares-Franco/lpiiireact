import React from 'react';
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
    </div>
  )
}

export default App;
