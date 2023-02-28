import "../TypeOfExchange";
import "./style.css";

const ExchangeSelection = ({title}) => (
    <>
        <p>
        <label>
                <span className="titleExchangeSelection">
                    {title}
                </span>

                <select name="exchange">
                    <option value="fromPlnToEur">from PLN to EUR</option>
                    <option value="fromPlnToUsd">from PLN to USD</option>
                    <option value="fromPlnToGbp">from PLN to GBP</option>
                    <option value="fromEurToPln">from EUR to PLN</option>
                    <option value="fromUsdToPln">from USD to PLN</option>
                    <option value="fromGbpToPln">from GBP to PLN</option>
                    
                </select>
            </label>  
        </p>
            
    </>
);

export default ExchangeSelection;