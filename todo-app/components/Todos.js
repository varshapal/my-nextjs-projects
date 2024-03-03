import { Fragment, useRef, useState } from 'react';
import classes from './Todos.module.css';
const Todos = (props) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    console.log(todoList);

    const changeEventHandler = (event) => {
        event.preventDefault();
        setEnteredTodo(event.target.value);
    }

    const addTodoHandler = (event) => {
        event.preventDefault();
        // setTodoList([
        //     ...todoList,
        //     enteredTodo
        // ])

        // const todoData = {
        //     todo: enteredTodo
        // }
        props.onAddTodos(enteredTodo);
        setEnteredTodo("");
    }
    return(
        <Fragment>
            <div className={classes.todos} >
                <input type="text" placeholder=" Enter new todo" value={enteredTodo} onChange={changeEventHandler}/>
                <button onClick={addTodoHandler}>Add Todo</button>
            </div>
            
        </Fragment>
        

    )
};

export default Todos;