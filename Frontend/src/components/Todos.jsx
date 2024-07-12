export function Todos({todos}){
    return <div>{
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{!todo.completed || (todo.completed === 0) ? 'Mark as completed' : 'Completed'}</button>
                </div>
                }
            )
        }
    </div>
}