

export const todoReducer = (initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            // el return es lo que devuelve como nuevo state
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo' :
            // initialState.filter si devuelve un nuevo obj no lo muta como push
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            // map es un metodo que tiene js para tranformar un arreglo
            return initialState.map( todo =>{
                if( todo.id === action.payload){//paylod va a ser el id del todo
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}