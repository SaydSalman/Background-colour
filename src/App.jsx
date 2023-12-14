
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [color,setColor] = useState("blue");
  const click = color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.getElementById("box").style.backgroundColor=color
  },[color])

  return (
    <div style={{width:"100%",height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div id='box' className='border rounded d-flex justify-content-center align-items-center flex-column' style={{width:'600px',height:'300px'}}>
        <h3 className='text-white'>Background Colour Change</h3>
        <div className='d-flex gap-2'>
          <button onClick={()=>{
            {click("yellow")}
          }} className='rounded'>Yellow</button>
          <button onClick={()=>{
            {click("blue")}
          }} className='rounded'>Blue</button>
          <button onClick={()=>{
            {click("red")}
          }} className='rounded'>Red</button>
          <button onClick={()=>{
            {click("green")}
          }} className='rounded'>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
