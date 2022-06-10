import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleDelete}) => {
  return (
    <div>
        <ul>
            {
            todos.map((todo,i)=>(
               <TodoListItem 
                  key = {todo.id}
                  todo = {todo}
                  index = {i}
                  handleDelete = {handleDelete}
                  handleToggle = {handleToggle}
               />
            ) )
            }
        </ul>
    </div>
  )
}
