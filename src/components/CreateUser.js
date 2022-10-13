import React, { useState } from 'react'
import {addDoc,collection} from '@firebase/firestore'
import {db} from '../firebase'
function CreateUser() {
   const [newName,setNewName] = useState("")
   const [newAge,setNewAge] = useState(0)

   const usersCollectionRef = collection(db,'users')

   const createUser = async () => {
      await addDoc(usersCollectionRef, {name : newName, age : Number(newAge)})
    }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',fontFamily:'sans-serif'}}>
            <h2>To <span style={{textDecoration:'underline'}}>Add</span> The Data On Database (Firestore)</h2>
      </div>
      <div style={{border:'1px solid #000',padding: '5px 10px',width:'220px'}}>
           <h2 style={{display:'flex',justifyContent:'center',fontFamily:'sans-serif'}}>User Form</h2>
         <input placeholder='Name' onChange={(e)=>setNewName(e.target.value)} 
        style={{width:'200px',height:'30px',marginBottom:'10px'}} /> <br />
        <input placeholder='Age' type='number' onChange={(e)=> setNewAge(e.target.value)} 
        style={{width:'200px',height:'30px',marginBottom:'10px'}} />  <br />
        <button onClick={createUser} style={{width:'208px',height:'30px',marginBottom:'10px',cursor:'pointer'}}>Create User</button>
      </div>
    </div>
  )
}

export default CreateUser
