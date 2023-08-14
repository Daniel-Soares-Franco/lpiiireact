export default function Tarefa(props)  {
    return (
        <div onClick={() => props.removeTarefa(props.index)}>
            Tarefa: {props.value}
        </div>
    )
}