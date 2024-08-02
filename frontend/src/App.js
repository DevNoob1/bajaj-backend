// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Numbers', 'Alphabets', 'Highest Alphabet'];

  const handleJsonSubmit = async (json) => {
    setLoading(true); // Start loading
    try {
      const res = await axios.post('http://localhost:4000/bfhl', json); // Replace with your backend URL
      setResponse(res.data);
    } catch (error) {
      console.error('Error submitting JSON:', error);
      alert('Failed to submit JSON');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className='App'>
      <h1>Frontend Sample Application</h1>
      <TextInput onSubmit={handleJsonSubmit} />
      {loading && <p>Loading...</p>}
      {response && (
        <>
          <Dropdown
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
