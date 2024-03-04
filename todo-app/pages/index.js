import { Fragment } from "react";
import Todos from "@/components/Todos";
import { MongoClient } from "mongodb";
import TodoList from "@/components/TodoList";

const Home = (props) => {
    
    
    return(
        <Fragment>
        <h1>Todo List</h1>
        
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
    // console.log("todos",todos);
    const serilizeData = JSON.parse(JSON.stringify(todos));
    // console.log(serilizeData);
    client.close();
    
    return {
        
        props: {
            todos: serilizeData,
        },
        revalidate: 1,
    }

}

export default Home;