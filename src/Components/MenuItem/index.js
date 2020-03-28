import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({text}) => {
    return (
        <div class = "travelBar" >            
           <Link to={"/"+{text}}  >{text}</Link>  
         </div >
    )
 }
 export default MenuItem