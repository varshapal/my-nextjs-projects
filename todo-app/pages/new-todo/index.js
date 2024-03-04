import Todos from "@/components/Todos";

const NewTodoPage = () => {
    const addTodoHandler = async (enteredTodoData) => {
        
        const response = await fetch('/api/new-todo', {
            method: 'POST',
            body: JSON.stringify({ name: enteredTodoData.name, status: enteredTodoData.status}),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        console.log("data",data);
        
    }
    return(
        <Todos onAddTodos={addTodoHandler}/>
    )
};

export default NewTodoPage;