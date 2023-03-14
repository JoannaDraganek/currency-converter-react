import Footer from "./Footer";
import Container from "./Container";
import "./index.css";
import { useState } from "react";

function App() {
 const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
 const onSelectChange = ({target}) => setExchange(target.value);
 const onFormSubmit = ({event}) => {
     event.preventDefault();
     console.log(`Wysłano `);
   };
 
 const [exchange, setExchange] = useState("");
  

  return (
    <>
     <Container>
     <form className="form" onSubmit={onFormSubmit}>
        <legend className="form__legend">Currency converter</legend>
        <p>
            <label>
                <span className="form__label">
                    Amount to be exchanged*:
                </span>
                <input 
                value={amount} 
                onChange={({target})=> setAmount(target.value)} 
                placeholder="Enter Amount" className="form__field" type="number" min="0"
                   max="100000000" step="any" required autofocus/>
            </label>
        </p>
        <p>
            <label>
                <span className="form__label">
                    Choose the type of exchange:
                </span>

                <select value={exchange} onChange={onSelectChange}>
                      <option>from PLN to EUR</option>
                      <option>from PLN to USD</option>
                      <option>from PLN to GBP</option>
                      <option>from EUR to PLN</option>
                      <option>from USD to PLN</option>
                      <option>from GBP to PLN</option>   
                  </select>
            </label>
        </p>
        <p>
            <button className="form__button"> Recalculate</button>
        </p>
        <p>
            <span className="form__label"> Result:</span><strong className="form__result">N/A</strong>
        </p>
        <p className="form__paragraph">
            Average exchange rates come from the nbp.pl website of December 2, 2022.
        </p>
    </form>
            <Footer title="© Copyright 2022 by Joanna Draganek - all rights reserved."/>     
      </Container>  
    </>
       
  );
};

export default App;
