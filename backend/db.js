const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo')
mongoose.set('debug', true);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    id : Number,
    completed: Number
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}