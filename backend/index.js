const express = require('express');
const app = express();
PORT = 3001;
app.use(express.json())
const {createTodo, updateTodo} = require('./types')

app.post('/todo',(req,res)=>{
    const pasredCreateTodo = createTodo.safeParse(req.body);
    if(!pasredCreateTodo.success){
        return res.status(411).json({
            'msg':'Hi you have entered wrong inputs'
        })
    }
    return res.status(200).json({
        'msg':'Todo added successfully'
    })

})
app.get('/todos', (req,res)=>{

})
app.put('/completed',(req,res)=>{
    const parsedUpdateTodo = updateTodo.safeParse(req.body);
    if(!parsedUpdateTodo.success){
        return res.status(411).json({
            'msg':'Hi you have entered the wrong inputs'
        })
    }
    return res.status(200).json({
        'msg':'Todo updated successfully'
    })
})

app.listen(PORT,
    console.log("server is listening on",PORT)
)