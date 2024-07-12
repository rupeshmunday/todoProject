import { useState } from 'react';
import './CreateTodo.css'
export function CreateTodo(){
    const [title,setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    return <div>
        <input type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value)
        }} /> <br />
        <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value)
        }} /> <br />
        <button onClick={function(){
            fetch('http://localhost:3001/todo', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                }

                )
            })
        }}>Add Todo</button>
    </div>
}