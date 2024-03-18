 
 
 
import { useState } from 'react';
import './App.css'

function App() {

  //useState se 2 chiz milti hai in array format
  //[first counter is variable, and setcounter is function
//is responsble for to chage the first one.]
//useState-> is responsible for to chnge the stte.change means
//change in UI

//counter me abhi default value 15 hoga kuch bhi de skte hai.
let [counter,setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => {
    //console.log("value added", Math.random());
    //console.log("clicked" , counter)
    //counter = counter + 1;
    setCounter(counter + 1)

    if(counter === 20 ) {
      return 
      
      
    }
  }

    const removeValue = () => {
      console.log("value remove" , counter);
      //counter = counter - 1;
      setCounter(counter - 1)
    }


    return (
    <>
      <h1>Hello vite</h1>

      <h2>Counter value:</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value{counter}</button>

      <p>footer</p>
        
    </>
  )
}

export default App
