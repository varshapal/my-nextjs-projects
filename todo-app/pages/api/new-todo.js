import { MongoClient } from "mongodb";

// /api/new-todo
//POST /api/new-todo

const handler =  async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;


        const client = await MongoClient.connect('mongodb+srv://varsha25pal:bHVzw4758Ro0ATZf@cluster0.ovpoxp1.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();

        const todosCollection = db.collection('todos');
        const result = await todosCollection.insertOne({data});
        console.log(result);

        client.close();

        res.status(201).json({ Message: 'Todo Inserted!'});

    }
}

export default handler;