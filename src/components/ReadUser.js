import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import {collection,getDocs,updateDoc,doc,deleteDoc} from "@firebase/firestore"

function ReadUser() {
const [users,setUsers] = useState([])
const usersCollectionRef = collection(db,'users')

    // Update
    const updateUser = async (id,age) => { 
      const userDoc = doc(db,'users',id)
      const newFields = {age:age + 1}
      await updateDoc( userDoc,newFields)
    }
    
    // Delete
    const deleteUser = async (id) => {
       const userDoc = doc(db,'users',id)
       await deleteDoc(userDoc)
    }

    useEffect(()=> {
    const getUsers = async () => {
    const data  = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
      }
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
       <div style={{display:'flex',justifyContent:'center',fontFamily:'sans-serif'}}>
            <h2>To <span style={{textDecoration:'underline'}}>Read, Update & Delete</span> The Data From Database (Firestore)</h2>
       </div>
       {users&&users?.map((user)=> {
         return ( 
        <div key={user?.id} 
        style={{display:'flex',border:'1px solid #000',marginBottom:'5px',padding: '0px 10px'}} > 
        <h1>Name: {user.name} </h1>
        &nbsp;&nbsp;&nbsp;
        <h1>Age: {user.age}</h1>
        <div style={{display:'flex',alignItems:'center'}}>
        &nbsp;&nbsp;&nbsp;
        <button 
        style={{width:'100px',height:'30px',cursor:'pointer'}}
        onClick={() => {updateUser(user?.id,user?.age )}}
        >Increase Age</button>
        &nbsp;&nbsp;&nbsp;
        <button 
        style={{width:'100px',height:'30px',cursor:'pointer'}}
        onClick={() => {deleteUser(user?.id)}}
        >Delete User</button>
        </div>
        </div>
          )
      })}
      <br />
     </div>
  )
}

export default ReadUser
