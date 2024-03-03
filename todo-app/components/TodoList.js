import classes from './TodoList.module.css';
const TodoList = (props) => {
    return(
        <ul>
            {props.todos.map((todo) => (
                <div className={classes.todolist}>
                    <li key={todo.id}>{todo.todo}</li>
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