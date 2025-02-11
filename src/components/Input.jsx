import React, { useState } from 'react';

function Input({ addItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            addItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Add Item</button>
        </form>
    );
}

export default Input;