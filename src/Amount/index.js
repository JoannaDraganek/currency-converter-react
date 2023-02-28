import "./style.css";

const Amount = ({title}) => (
    <>
        <span className="form__label">{title}</span>
        <input placeholder="Enter Amount" className="form__field" type="number" name="amount" min="0"
        max="100000000" step="any" required autofocus/>
    </>
    
);

export default Amount;
