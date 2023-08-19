 import {Link} from 'react-router-dom'
 
 export default function MyNavbar(props){
    return (
        <nav>
            <ul><li><img width={'100px'} src={props.logo} alt="test" /></li>
                <li><Link to={""} >Tarefas</Link></li>
                <li><Link to={"form"} >Formulario</Link></li>
                <li><Link to={"alunos"} >Alunos</Link></li>
                
            </ul>
        </nav>
    )
 }