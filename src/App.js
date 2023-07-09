import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {incNumber,decNumber} from './actions/index';
import './App.css'


export default function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='my-container' style={{justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
      <h1 className='my-3'>Increment / Decrement Counter</h1>
      <h4 className='my-3'>Using React-Redux</h4>

      <div>
        <input  className='input my-3' type="text" value={myState} ></input>
      </div>
      <button className='my-3 btn btn-success' title='Increment' onClick={()=>dispatch(incNumber())}>Increase</button>
      
      <button className='my-3 btn btn-danger' title='Decrement' onClick={()=>dispatch(decNumber())}>Decrease</button>
      
      
    </div>
  )
}
