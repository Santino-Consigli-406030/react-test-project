import React, { useState } from 'react';
import Input from './Input';

function addItem(items, setItems, item) {
    setItems([...items, item]);
}

function ListGroup() {
    const [items, setItems] = useState(["An item", "A second item", "A third item", "A fourth item", "And a fifth one"]);
    const handleAddItem = (item) => {
        addItem(items, setItems, item);
    };
    return (
        <>
            <h1>List</h1>
            <Input addItem={handleAddItem} />
            {items.length === 0 && <p>There are no items in the list</p>}
            <ul className="list-group">
                {items.map((item, index) => {
                    return <li 
                    key={index} 
                    className="list-group-item" 
                    onClick={handleClick}>
                        {item}
                    </li>;
                })}
            </ul>
        </>
    );
}

export default ListGroup;