// src/components/Dropdown.js
import React from 'react';
import '../App.css';

const Dropdown = ({ options, selectedOptions, setSelectedOptions }) => {
    const handleChange = (e) => {
        const { options } = e.target;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedOptions(selected);
    };

    return (
        <div>
            <select multiple={true} value={selectedOptions} onChange={handleChange}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
