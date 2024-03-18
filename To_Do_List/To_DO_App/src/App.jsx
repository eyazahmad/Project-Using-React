import React, { useState } from 'react'
import './App.css'
import ToDOInput from './components/ToDoInput'
import ToDoList from './components/ToDoList';


function App() {
  const [listToDo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !== '')
    setListTodo([...listToDo,inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

   

  

  return (
    <>
     <div classNmae = "main-container">
        <div className= "center-container">
        <ToDOInput addList={addList}/>
        <h1 className='app-heading' >TODO</h1>
        <hr/>

        {listToDo.map((listItem,i)=>{
        return(
          <ToDoList key={i} index={i} item = {listItem} deleteItem={deleteListItem}/>
        )
})}




        
        </div>

      </div>
      

    </>
  )
}

export default App
