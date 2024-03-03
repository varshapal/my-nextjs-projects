import { Fragment } from "react";
import Todos from "@/components/Todos";
import { MongoClient } from "mongodb";
import TodoList from "@/components/TodoList";

const Home = (props) => {
    
    const addTodoHandler = async (enteredTodoData) => {
        const response = await fetch('/api/new-todo', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        console.log(data);
        
    }
    return(
        <Fragment>
        <h1>Home Page</h1>
        <Todos onAddTodos={addTodoHandler}/>
        <TodoList todos={props.todos}/>
        </Fragment>
    )
};

export const getStaticProps = async() => {
    //fetch data from an API

    const client = await MongoClient.connect('mongodb+srv://varsha25pal:bHVzw4758Ro0ATZf@cluster0.ovpoxp1.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const todosCollection = db.collection('todos');
    const todos = await todosCollection.find().toArray();
    console.log(todos);
    const serilizeData = JSON.parse(JSON.stringify(todos));
    client.close();
    
    return {
        props: {
            todos: serilizeData.map((todo) => ({
                todo: todo.data,
                id: todo._id.toString(),

            }))
        },
        revalidate: 1,
    }

}

export default Home;