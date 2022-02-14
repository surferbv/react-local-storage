import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  
  // Gets the count value and converts it to a string 
  const storedCountAsNumber = Number( localStorage.getItem( "count" )  );
  
  const [count, setCount] = useState(

    Number.isInteger(storedCountAsNumber) ? storedCountAsNumber : 0

  );

  // Sets local storage counts value to the key count
  useEffect(() => {

    console.log("Set local storage count value");

    window.localStorage.setItem('count', count);

  }, [count]);


  const increaseCount = (e) => {

    return setCount( count + 1 );

  };


  const decreaseCount = (e) => {

    return setCount( count - 1 );
     
  };

  return (
    <div className="App">
      
      <h1> Count {count} </h1>

      <button onClick={increaseCount}>+</button>

      <button onClick={decreaseCount}>-</button>

    </div>
  );
}

export default App;
