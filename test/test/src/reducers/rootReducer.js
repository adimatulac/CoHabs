const initState = {
    todos: [
        {id: '1', content: 'Pick up parcel', showPopUp: false, popup: 'monitor from Amazon', tag: 'Jason'},
        {id: '2', content: 'Clean house', showPopUp: false, popup: 'throw away trash', tag: 'Jess'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_TODO') {
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        });
        return {
            ...state,
            todos: newTodos
        }
    }
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    if(action.type === "OPEN_POPUP") {
        state.todos.forEach(element => {
            if(element.id === action.id){
                element.showPopUp = !element.showPopUp;
            }
        });
        return {
            todos: [...state.todos]
        }
    }
    return state;
    
}

export default rootReducer;