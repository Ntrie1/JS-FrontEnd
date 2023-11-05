export default function ToDoItem(props) {

    const onChangeStatusClick = () =>{
        props.onChangeStatusHandler(props.id) 
    }

    return (
        <tr className={`todo ${props.isCompleted ? 'is-completed' : ''}`}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? 'Completed' : 'Incompleted'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    ); 
}