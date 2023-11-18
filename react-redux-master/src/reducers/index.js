//reducers
import {combineReducers} from 'redux'

const increase =(state =0,action) =>
{   if (action.type === "INCREMENT" )
    {
        return state + action.inc ;  
    }
    return state; 

} 

const myReducer = combineReducers({increase}); 

export default myReducer;


