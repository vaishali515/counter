import React from 'react';
import {useState} from 'react';
import { Button, Grid} from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';


import './App.css';

function App() {

const [count, setCount] = useState(0)
  const [name] = useState('Vaishali')
  const [registrationNumber] = useState('12016492')

  function increment() {
    

      setCount(count + 1)
    
  }

  function decrement() {
    if(count === 0){
      document.querySelector(".decrement").disabled = true;

      setInterval(
        function(){
          document.querySelector(".decrement").disabled = false;
        }
      , 1000

      )


    }
    else {

      setCount(count - 1)
    }
  }

  


  return (
    <div className='lets'>
      <center>
    <Card >
      <Card.Content extra>
        <h1> Count </h1>
      <div className="counter" style={{color:'red', marginBottom:"30px",fontSize:"30px"}} >{count} </div>
      <Grid celled>
      <Grid.Row>
        <Grid.Column width={8}>

      <Button color="green" style={{marginRight:"30px"}} onClick={increment}>Increment</Button>
      </Grid.Column>
      <Grid.Column width={8}>
      <Button color="red" onClick={decrement} disabled={count===0}>Decrement</Button>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </Card.Content>
    </Card>
    <div style={{marginTop:"40px"}}><span> Made by: {name}</span> <span className='registration-number'> Registration number : {registrationNumber}</span></div>
    </center>
    </div>
  )

}
export default App;
