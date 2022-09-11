import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logOut } from '../features/user';

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
          <button color='blue' style={{ flex: 1, justifyContent: 'space-between' }} 
          onClick={() => dispatch(login({ nom: "goaudria", prenom: "farouk", email: "gouadriaafar@gmail.com", password: "frouga12" }))}>READ</button>
          <button color='blue' style={{ flex: 1, justifyContent: 'space-between' }}
              onClick={() => dispatch(logOut())}>DELETE</button>
    </div>
  )
}

export default Login