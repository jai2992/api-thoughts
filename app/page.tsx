'use client'
import { useState } from "react"

export default function(){
  const [message,setMessage] = useState<string>("")
  const [content,setContent] = useState<string>("")
  const [status,setStatus] = useState<string>("Waiting for response")
  const handleclick = async ()=>{
    setStatus("fetching ...")
    const respose = await fetch("/api/hello",{
      method:"POST",
      headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({message})})
        .then((response)=>{
          return response.json()
        })
        .then((data)=>{
          setStatus("recieved from api")
          setContent(data.message)
        })
  }
  return(
    <div className='flex justify-center items-center w-full h-full'>
      <div className="flex flex-col justify-center items-center p-10 bg-green-100/85 rounded-xl">
        <div className="text-red-600 font-black text-xs">{status}</div>
        <div className="flex w-full justify-center items-center text-black font-bold p-4 mb-5">
          {content?content:"No message"}
        </div>
        <div className="flex flex-col justify-center items-center">
          <input className='border-0 ring-1 bg-black focus:bg-black text-white text-center rounded-xl py-2' type="text" onChange={(e)=>{
            setMessage(e.target.value)
          }}/>
          <button onClick={handleclick} className="bg-white text-black font-extrabold rounded-md px-4 py-2 mt-5 hover:text-green-400 hover:bg-black">POST</button>
        </div>
      </div>
    </div>
  )
}