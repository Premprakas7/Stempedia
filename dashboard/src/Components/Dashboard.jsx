import React, { useEffect } from 'react'
import Input from './Input'
import List from './List'
import { useDispatch } from 'react-redux'
import { getTodos } from '../Redux/action'


const Dashboard = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    getTodos(dispatch);
  },[dispatch])
  return (
    <div>
        <Input/>
        <br />
        <List/>
      
    </div>
  )
}

export default Dashboard
