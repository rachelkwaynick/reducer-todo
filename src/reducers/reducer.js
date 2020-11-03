import { ADD, TOGGLE } from '../actions/todoActions';





const reducer = (state, action) => {
    // console.log('action.payload in reducer', action.payload)
    let setCompleted = state.list.map(item => {
        if (item.id === action.payload) {
            // console.log('item.completed in reducer', item.completed)
            return {
                ...item,
                completed: !item.completed
            }
        } 
            
        return item;
        
    });


    switch (action.type) {
        case TOGGLE: 
            console.log('state in reducer', state)
            return {
                ...state,
                list: setCompleted
            }
        default:
            return state;
    }
}

export default reducer;