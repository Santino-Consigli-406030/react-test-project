import React, { useState, useEffect } from 'react';
import Input from './Input';

function addItem(items, setItems, item) {
    setItems([...items, item]);
}

function ListGroup() {
    const [items, setItems] = useState(["An item", "A second item", "A third item", "A fourth item", "And a fifth one"]);
    const [selectOptions, setSelectOptions] = useState([]);

    const handleAddItem = (item) => {
        addItem(items, setItems, item);
    };

    const handleClick = (item) => {
        console.log(item);
    };

    useEffect(() => {
        const fetchDataProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setSelectOptions(data);
        };

        fetchDataProducts();
    }, []);

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
                    onClick={() => handleClick(item)}>
                        {item}
                    </li>;
                })}
            </ul>
            <select className="form-select">
                {selectOptions.map((option) => (
                    <option key={option.id} value={option.title}>
                        {option.title}
                    </option>
                ))}
            </select>
        </>
    );
}

export default ListGroup;