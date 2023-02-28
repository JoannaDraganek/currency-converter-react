import "./style.css";

const Result = ({title, result}) =>(
    <>
        <span className="form__label">{title}</span><strong className="resultWindow">{result}</strong>
    </>
);

export default Result;
