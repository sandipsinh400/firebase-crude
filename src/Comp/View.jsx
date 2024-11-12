import { ref ,get} from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'


const View = () => {
    const [user,setuser]=useState({})
    const {id}=useParams()
    async function singleuser() {
        const res=await get(ref(db,`rnw/student/${id}`))
        console.log(res.val());
        setuser(res.val())
    }
    useEffect(()=>{
        singleuser()
    },[id])

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">User Details</h1>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> <strong>UserName : </strong>{user.username}</h5>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        {/* You can add more fields if necessary */}
      </div>
    </div>
  </div>
  )
}

export default View