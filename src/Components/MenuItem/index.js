import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    return (
        <div class = "travelBar" >            
           <Link to={props.path}  >{props.text}</Link>  
         </div >
    )
 }
 export default MenuItem