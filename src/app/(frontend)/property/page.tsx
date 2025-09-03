'use client'
import React, { FormEventHandler, createRef, useState } from 'react'

export default function PropertyPage() {
  const [username, setUsername] = useState("Measnunt");
  return (
    <div>
        <UserComponent username={username} setUsername={setUsername}
          email="measnunt@example.com"/>
    Username: {username}
    <br/>Username: {username}
    <br/>Username: {username}
    <br/>Username: {username}
    <br/>{Math.random()}
    </div>
  )
}

function UserComponent(props:any) {
  //props are constant
  //state can be mutable
  const updateUsername=(e:React.FormEvent<HTMLInputElement>)=>{
    props.setUsername(e.currentTarget.value)
  }
  const ref = createRef<HTMLInputElement>();
    return (
    <div>
      UserComponent: 
      <input value={props.username} onInput={updateUsername}/>
     - <input defaultValue={props.email} ref={ref} />
     <br/>
     <button type="button" onClick={()=>console.log(ref.current?.value)}
      className='bg-blue-800 text-white p-2 rounded cursor-pointer'>Submit</button></div>)
}