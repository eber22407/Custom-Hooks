import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer"


const initialState = [];

const init = () => {
    // si es null retorna un arreglo vacio
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = ( ) =>{
    

    // el reducer en el primer argumento es el reducer que se importa de todoReducer
    // se pasa la referencia
    const [todos, dispatch] = useReducer( todoReducer, initialState, init)

    // el useEffect se dispara cuando el componete se monta y cuando los todos cambian
    useEffect(() => {
        // para guardar info en el local storage necesito serializar la info
        // no se pueden guardar objs solo strings
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    


    const handleNewTodo = ( todo ) => {
        // todo es el payload que quiero enviarle al reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo//esta es la accion que quiero mandarle al reducer, es nuestro todo
        }
        // dospatch es la funcion por la cual mando la accion al reducer
        dispatch( action );
        // console.log( {todo} );
    }

    const handleDeleteTodo = ( id ) => {
        console.log({id})
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        ...todos,
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}