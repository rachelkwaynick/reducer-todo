import React from 'react';
import styled from 'styled-components';
// import reducer from './reducers/reducer'


const StyledItem = styled.div`
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
    width: 60%;


    .done {
        text-decoration: line-through;
    }
`
const Item = ({ item, handleToggleItem }) => {

    // const [state, dispatch] = useReducer(reducer)


    const handleClick = () => {
        handleToggleItem(item.id)
        console.log('item.id in Item', item.id)

    }

    return (
        <StyledItem
            onClick={handleClick}
        >
            <div
                className={`item${item.completed} ? ' done' : ''`}
            >
                {item.item}
            </div>
        </StyledItem>
    )
}

export default Item