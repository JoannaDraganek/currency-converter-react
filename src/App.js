import Container from "./Container";
import Form from "./Form";
import Legend from "./Legend";
import Result from "./Result";
import Footer from "./Footer";
import ExchangeSelection from "./ExchangeSelection";
import Info from "./Info";
import Button from "./Button";
import Amount from "./Amount";
import "./index.css";

//const amount = 100;
/*const typeOfExchange = [
  {id:1, selectedExchange: "from PLN to EUR"},
  {id:2, selectedExchange: "from PLN to USD"},
  {id:3, selectedExchange:"from PLN to GBP"},
  {id:4, selectedExchange:"from EUR to PLN"},
  {id:5, selectedExchange:"from USD to PLN"},
  {id:6, selectedExchange:"from GBP to PLN"},
];
*/

function App() {
  return (
    <>
     <Container>
            <Form>
              <Legend title="Currency converter"/>
              <p>
                <label>
                    <Amount title="Amount to be exchanged*:"/>
                </label>
              </p>
                  <ExchangeSelection title="Choose the type of exchange:"/> 
                  <p>
                    <Result title="Result:" result="N/A"/>
                  </p>
                  <p>
                    <Button title="Recalculate"/>
                  </p>
                  <Info title="Average exchange rates come from the nbp.pl website of December 2, 2022."/>
            </Form>
            <Footer title="© Copyright 2022 by Joanna Draganek - all rights reserved."/>     
      </Container>  
    </>
       
  );
};

export default App;
