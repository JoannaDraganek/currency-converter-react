import Form from "./Form";
import Footer from "./Footer";
import Info from "./Info";
import "./index.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [exchange, setExchange] = useState("");
  
  
  const onFormSubmit = ({event}) => {
    event.preventDefault();
    console.log(`Wysłano `);
  };

  const onSelectChange = ({target}) => setExchange(target.value);

  return (
    <>
     <Container>
            <Form onSubmit={onFormSubmit}>
            </Form>
            <Footer title="© Copyright 2022 by Joanna Draganek - all rights reserved."/>     
      </Container>  
    </>
       
  );
};

export default App;
