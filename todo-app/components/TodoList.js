import classes from './TodoList.module.css';
const TodoList = (props) => {
    console.log(props.todos);
    return(
        <ul>
            {props.todos.map((todo) => (
                <div className={classes.todolist}>
                    <li key={todo.data.id}>{todo.data.name}</li>
                    <div>
                        <button>Delete</button>
                        <button>&#x2714;</button>
                    </div>
                
                </div>
                
            ))}
        </ul>
    )
}

export default TodoList;