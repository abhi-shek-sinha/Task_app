import React, { useState } from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { markAsComplete, updateToDo } from '../utils/HandleApi';



const ToDo = ({toDo,todoData, updateMode, deleteToDo,setColor,color,setToDo }) => {

        
   
   
    function change_color (){
      setColor("#cceb34")
      console.log('16....',todoData);
      const _payload ={...todoData,active:false};
      markAsComplete(setToDo,_payload)
    } 
    
  
    

  
    
    return (
        <div className="todo" style={{backgroundColor : color}} >
            <h2 className="text">{todoData.title}</h2>
            <p className='descri'>{todoData.description}</p>
            <div className="icons">
                <button onClick={change_color} className='cmp-btn' >Mark as completed</button>
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo