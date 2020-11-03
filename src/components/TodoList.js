import React from 'react';
import Item from './Item';

const ToDoList = props => {

    const { list } = props;

    const handleClick = () => {
        props.handleClearItems()
    }

    return (
        <div>
            {
                list.map(item => (
            
                    <Item
                        handleToggleItem={props.handleToggleItem}
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    )
}

export default ToDoList