import React, { useReducer } from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './App.css';
import reducer from './reducers/reducer'
import actions from './actions/todoActions';

const initialState = {
  list: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Learn about reducers1',
      completed: false,
      id: 38929875891
    },
    {
      item: 'Learn about reducers2',
      completed: false,
      id: 38929875892
    },
    {
      item: 'Learn about reducers3',
      completed: false,
      id: 38929875893
    },
  ]
}

export default function App() {
  const [state, dispatch ] = useReducer(reducer, initialState)

  const handleToggleItem = (itemId) => {
    // console.log('itemId in App.js', itemId)
    dispatch(actions.toggleAction(itemId))
    
    // let setDone = state.list.map(item => {
    //   if (item.id === itemId) {
    //     return {
    //       ...item,
    //       done: !item.done
    //     }
    //   }
    //   return item;
    // });

    // setState({
    //   list: setDone
    // })
  }

  // clearItems = () => {
  //   setState * ({
  //     list: state.list.filter(item => (!item.done))
  //   })
  // }

  const handleAddItem = (name) => {
    // setState({
    //   list: [
    //     ...state.list, {
    //       name: name,
    //       id: state.list.length,
    //       done: false
    //     }
    //   ]
    // })
  };


    console.log('state.list', state.list)
  
    return (
      <div className="App">
        <ToDoForm
          handleAddItem={handleAddItem}
        />
        <ToDoList
          // handleClearItems={clearItems}
          handleToggleItem={handleToggleItem}
          list={state.list}
        />

      </div>
    );
}



