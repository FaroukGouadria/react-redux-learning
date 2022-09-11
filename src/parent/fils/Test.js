import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const state = useSelector((state)=>state.user.value)
  return (
    <div>
        component test ici : {state.email}</div>
  )
}

export default Test