import "./style.css";

const Form = () => (
    <form className="form">
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
);

export default Form;