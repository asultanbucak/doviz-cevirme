import React from 'react'
import '../css/currency.css' 
import axios from 'axios'
import { useState } from 'react'

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
let API_KEY = 'fca_live_cgy835tostyA0LOFWYtJr3DYnR11hb2vuHw4kQKh'


function Currency() {

  

  const [amount, setAmount] =useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const convertCurrency = async () => {
   
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
  const result = (response.data.data[toCurrency] * amount).toFixed(2);
  setResult(result);

  }
  return (
    <div className="app-wrapper">
      <div className="currency-app">
        <h2 className="app-title">Döviz Çevirici</h2>
        
        <div className="input-container">
          <label>Miktar</label>
          <div className="currency-row">
            <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="currency-input"
              placeholder="0.00"
            />
            <select onChange={(e) => setFromCurrency(e.target.value)} className="currency-select">
              <option>USD</option>
              <option>EUR</option>
              <option>TRY</option>
            </select>
          </div>
        </div>

        <div className="swap-divider">
          <span>↓</span>
        </div>

        <div className="input-container">
          <label>Sonuç</label>
          <div className="currency-row output-row">
            <input
            value = {result}
            onChange = {(e) => setResult(e.target.value)}
              type="number"
              className="currency-output"
              placeholder="0.00"
              disabled
            />
            <select value = {toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="currency-select">
              <option>TRY</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
 
        <button 
        onClick = {convertCurrency} className="convert-btn">Dövizi Çevir</button>
      </div>
    </div>
  );
}

export default Currency;