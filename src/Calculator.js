import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [perPersonAmount, setPerPersonAmount] = useState(0)

  function calculateTotal() {
    if (bill !== 0 && tip !== 0 && people !== 0) {
      const tipCalc = (bill * tip) / 100;
      const totalCalc = (parseFloat(bill) + tipCalc).toFixed(2);
      setTipAmount((tipCalc / people).toFixed(2));
      setTotalAmount(totalCalc)
      setPerPersonAmount((parseFloat(totalCalc)/ people).toFixed(2));
    } else {
      setTipAmount(0);
      setTotalAmount(0);
      setPerPersonAmount(0)
    }
  }  

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      calculateTotal()
    }
  }
  // https://stackoverflow.com/questions/38791919/call-a-function-after-leaving-input-field
  // onBlur event handler: Adding this to each input field will fire the calculateTotal function
  // whenever the user clicks outside of the input field.
  function handleBlur(event) {
      calculateTotal()
  }

  return (
    <div className='calculator'>
      <form>
          <label for="bill">Bill Amount</label>
          <input 
          type="number" className='bill' placeholder="0.00" min="0.00" 
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          />

          <label for="tip">Tip%</label>
          <input 
          type="number" className='tip' placeholder="0%" min="0"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          />
          
          <label for="people">Number of People</label>
          <input 
          type="number" className='people' placeholder="1" min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          />
      </form>
      <div className='display'>
        <h3>Tip Amount</h3>
        <p>${tipAmount}</p>
        <br></br>
        <h3>Total Amount</h3>
        <p>${totalAmount}</p>
        <br></br>
        <h3>Per Person Amount</h3>
        <p><b>${perPersonAmount}</b></p>
      </div>
    </div>
  )
}