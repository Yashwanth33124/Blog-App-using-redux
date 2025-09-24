import React from 'react';
import {useDispatch} from 'react-redux'
import { handleincrease } from '../store/slices/counter';


export default function But() {
    let dispatch = useDispatch()

     function handleclick() {
        dispatch(handleincrease())
     }



    return(
        <button 
        onClick={handleclick}
        style={{backgroundColor:'black', color:'white'}}>
            Increase button

        </button>
    )
}