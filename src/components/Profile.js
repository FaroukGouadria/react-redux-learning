import React from 'react'
import { useSelector } from 'react-redux';

 
function Profile() {
    const state = useSelector((state)=>state.user.value)
  return (
    <div>
        <p>nom : {state.nom}</p>
        <p>prenom : {state.prenom} </p>
        <p>email : {state.email} </p>
        <p>password : {state.password} </p>
    </div>
  )
}

export default Profile