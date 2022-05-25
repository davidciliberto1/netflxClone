import React, {useReducer, createContext, useState} from 'react'
import Page2 from './Components/commons/pages/page2/Page2'
import Types from './Components/commons/types/Types';

export const initialState = {   
    count: 0,
};  

export const CountContext = createContext(initialState);

export const  counterReducer = (state, action) => {
    switch (action.type) {
        case Types.SUMAR:
            return {
                ...state,
                count: state.count + 1
            }
                      
        case Types.RESTAR:
            return {
                ...state,
                count: state.count - 1
            }
            
        default:
            return state
    }
}
    

const ReducerContext = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
  <div>
    <div>ReducerContext</div>
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({type: Types.SUMAR})}>Sumar</button>
    <button onClick={() => dispatch({type: Types.RESTAR})}>Restar</button>

    <Page2 />
    </div>
  )
}

export default ReducerContext;