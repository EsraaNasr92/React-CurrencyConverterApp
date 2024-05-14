import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

function App() {
  const [info, setInfo] = useState({});
  const [amount, setAmount] = useState(0);
  const [base, setBase] = useState("USD");
  const [to, setTo] = useState("EGP");
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`)
      .then((res) => {
        setInfo(res.data.rates); // Access rates object instead of base directly
        setOptions(Object.keys(res.data.rates)); // Access rates keys for options
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [base]);

  function handleConvertion() {
    const rate = info[to];
    setResult(amount * rate);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className='text-3xl font-bold mb-8'>
        Currency Converter
      </div>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Amount</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Enter your amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>From</label>
          <Dropdown
            options={options}
            value={base}
            onChange={(selected) => setBase(selected.value)} // Changed setFrom to setBase here
            placeholder="Select currency"
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>To</label>
          <Dropdown
            options={options}
            value={to}
            onChange={(selected) => setTo(selected.value)}
            placeholder="Select currency"
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleConvertion}
        >
          Convert
        </button>
      </div>
      <div className='text-xl font-bold'>
        Converted Amount:
        <p>{amount} {base} = {result.toFixed(2)} {to}</p>
      </div>
    </div>
  );
}

export default App;
