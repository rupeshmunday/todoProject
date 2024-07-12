const express = require('express');
const app = express();
PORT = 3001;
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./db');
const cors =  require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json())

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

app.post('/todo',async (req,res)=>{
    // console.log("request---------------------------",req);
    const pasredCreateTodo = createTodo.safeParse(req.body);
    if(!pasredCreateTodo.success){
        return res.status(411).json({
            'msg':'Hi you have entered wrong inputs'
        })
    }
    await todo.create({
        title : req.body.title,
        description: req.body.description,
        completed : 0
    })
    return res.status(200).json({
        'msg':'Todo added successfully'
    })

})
app.get('/todos', async (req,res)=>{
    const todoList = await todo.find({})
    return res.status(200).json({
        'msg':"List fetched successfully",
        'list':todoList
    })

})
app.put('/completed',async (req,res)=>{
    const parsedUpdateTodo = updateTodo.safeParse(req.body);
    if(!parsedUpdateTodo.success){
        return res.status(411).json({
            'msg':'Hi you have entered the wrong inputs'
        })
    }
    await todo.updateOne({_id:req.body.id},{completed : 1})
    return res.status(200).json({
        'msg':'Todo updated successfully'
    })
})

app.listen(PORT,
    console.log("server is listening on",PORT)
)