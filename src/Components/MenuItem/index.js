import React from 'react';
import { useHistory } from 'react-router-dom'
import '../../App.css'

const MenuItem = (props) => {
    const history = useHistory();
  
    function handleClick() {
      history.push(props.path);
    }
    return (
        <div className = "travelBar travelBarText" onClick={handleClick}> {props.text}   
         </div>
    )
 }
 export default MenuItem