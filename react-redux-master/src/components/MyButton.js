import React from 'react'
import { useDispatch} from 'react-redux' 
import Increase from '../actions'


const Click = () => 
{   let dispatch = useDispatch(); 
    return (  
        <button onClick= { () => dispatch (Increase(5))} > Increase the Counter by 5 </button>     
    ); 

}

export default Click; 





