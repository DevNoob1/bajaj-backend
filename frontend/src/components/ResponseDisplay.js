import React from 'react';
import '../App.css';

const ResponseDisplay = ({ response, selectedOptions }) => {
    return (
        <div>
            {selectedOptions.includes('Numbers') && (
                <div>
                    <h3>Numbers</h3>
                    <pre>{JSON.stringify(response.numbers, null, 2)}</pre>
                </div>
            )}
            {selectedOptions.includes('Alphabets') && (
                <div>
                    <h3>Alphabets</h3>
                    <pre>{JSON.stringify(response.alphabets, null, 2)}</pre>
                </div>
            )}
            {selectedOptions.includes('Highest Alphabet') && (
                <div>
                    <h3>Highest Alphabet</h3>
                    <pre>{JSON.stringify(response.high_alphabet, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
