'use client'
import { useState } from "react"

export default function(){
  const [message,setMessage] = useState("")
  const handleclick = ()=>{
    console.log("this is message",message)
  }
  return(
    <div className='flex bg-red-100 min-h-full justify-center items-center'>This is the main content
    <form>
    <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
    <button onClick={handleclick}>POST</button>
    </form>
    </div>
  )
}