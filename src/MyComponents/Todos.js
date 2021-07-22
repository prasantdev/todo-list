import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let todoStyle = {
        minHeight: '70vh'
    }
    return (
        <div className='container' style={todoStyle}>
            <h3 className='text-center'>Todos List</h3>
            {props.todos.length?props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.slno} onDelete={props.onDelete}/>
            }):'No Todos to Display'}
{/*             
            {props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.slno} onDelete={props.onDelete}/>
            })}
           */}
            
        </div>
    )
}
