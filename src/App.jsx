import React, { useReducer } from 'react'
import FirstComponent from './component/FirstComponent'
import { createContext } from 'react'
import { useState } from 'react'


export var TextContext = createContext()


const reducer = (state, action) => {
  switch (action.type) {
    case "SetActive":
      return {...state, active:!state.active}
      break
    case'SetColor':
    return {
      ...state,color: action.color
    }
  }
}


const App = () => {


  const [state, dispatch] = useReducer(reducer, {
    active: false,
    color: "white"
  })


  const ToggleActive=()=>{
    dispatch({
      type:"SetActive"
    })
  }

  const orqafon=(item)=>{
    dispatch({
      type:'SetColor',
      color:item
    })
  }
  return (
    <TextContext.Provider value={{ active:state.active, color:state.color, setColor: orqafon, setActive: ()=>{} }}>
      <div className='container my-4'>
        <button className='btn btn-success my-3'
          onClick={ToggleActive}>Active Toggle</button>
        <div className="row">
          <div className="col-6">
            <FirstComponent />
          </div>
        </div>





      </div>
    </TextContext.Provider>
  )
}

export default App