import React from 'react'
import {useSelector} from 'react-redux'

const DivPan =() =>  
{  let countVal = useSelector(state => state.increase) 
   return (
    <div> The present value of counter is: {countVal}  </div>

   );   

}

export default DivPan; 