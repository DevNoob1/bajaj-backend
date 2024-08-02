// src/components/TextInput.js
import React, { useState } from 'react';
import '../App.css';

const TextInput = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const json = JSON.parse(input);
            onSubmit(json);
        } catch (error) {
            alert('Invalid JSON');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON here'
                rows='5'
                cols='50'
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default TextInput;
