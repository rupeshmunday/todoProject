const z = require('zod');

createTodo = z.object({
    title: z.string(),
    description: z.string()
})

updateTodo = z.object({
    id:z.string()
})

module.exports = {
    createTodo,
    updateTodo
}

