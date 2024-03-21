import { useCallback, useEffect, useRef, useState } from 'react'
 
 

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [password,setPassword] = useState("")

  //useRef hooks
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`~!@#$%^&*[]{}+_/"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      //har loop ke andar jakr is pass value ko overirde krrha hu
      //toh iske ke isko concatentate kr dnge to shi hog jyega
      //means append kar do vlaue ko
      pass += str.charAt(char)
    }
    //vlue read
    setPassword(pass) 

  //here we are given those array that dependncy is
  //dependtn to change anything(metyhod ko de rhe agr kuch
 // methd me change hua to us us ko update kro)
 //here are talking about optimization

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    
    window.navigator.clipboard.writeText(password)

  }, [password])
 
  // yha hmlog bat kar rthe agar kuch bhi change ho rha toh isko chnge

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      <div className='clasNmae="flex shadow rounded-lg overflow-hidden mb-4"'>

       <input type='text' 
       value={password}
       className="outline-none w-full py-1 px-3" 
       placeholder='password'
       readOnly
       ref={passwordRef}

       />
       <button 
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-400 text-white 
       px-3 py-0.5 shrink-0'> Copy </button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

        <input
        type="range"
        min={6}
        max={100}
        value={length}
        
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        </div>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setnumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setcharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>






    </div>
  
    </>
  )
}

export default App
