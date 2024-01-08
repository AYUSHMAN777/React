import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [AllwChar, SetAllwChar] = useState(false);
  const [AllwNum, SetAllwNum] = useState(false);
  const [Password, Setpassword] = useState("");


  const passsgenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz"
    if (AllwChar) str += "!@#$%^&*(){}_?"
    if (AllwNum) str += "12344567890"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    Setpassword(pass);
  }, [length, AllwChar, AllwNum, Setpassword]);


  const PasswordRef = useRef(null)



  const CopyClipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRage(0, 101);
    window.navigator.clipboard.writeText(Password)
    // console.log(window.navigator.clipboard.writeText);  
  }, [Password])


  useEffect(() => {
    passsgenerator()
  }, [length, AllwChar, AllwNum, passsgenerator])

  return (
    <>
      <div className=' w-full max-w-[520px] mx-auto shadow-mg rounded-lg py-4 px-3 my-8 text-orange-500 bg-gray-700 h-auto'>
        <h1 className='text-center text-white '>Password Generator</h1>
        <div className='classname="flex shadow rounded-lg overflow-hidden mb-8 '>
          <input type="text"
            value={Password}
            className='outline-none w-[420px] py-1 px-3 rounded-md text-center'
            placeholder='Password'
            readOnly
            ref={PasswordRef}
          />
          <button onClick={CopyClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg m-1 text-[18px]'>Copy</button>
          <div className='flex text-sm gap-x-2 mt-3'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setlength(e.target.value)
                }}
              />
              <label >length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={AllwNum} id="numberInput" onChange={() => {
                SetAllwNum((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={AllwChar} id="CharInput" onChange={() => {
                SetAllwChar((prev) => !prev);
              }}
              />
              <label htmlFor="CharInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
