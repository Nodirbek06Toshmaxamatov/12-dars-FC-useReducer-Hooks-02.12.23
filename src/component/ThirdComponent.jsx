import React from 'react'
import { useContext } from 'react'
import { TextContext } from '../App'


const ThirdComponent = () => {

  var PropsObj = useContext(TextContext)

  var Colors = ['white', 'blue', 'red', 'orange', 'darkcyan']

  var bgColor = (item) => {
    PropsObj.setColor(item)
  }
  var modalStyle = {
    backgroundColor: PropsObj.color
  }
  return (
    <div>
      {
        PropsObj.active ?
          <div className="card" style={modalStyle} onClick={() => PropsObj.setActive(prev => !prev)}>
            <div className="card-header">
              <h1>Active</h1>
            </div>
            <div className="card-body">
              <h3>modal...</h3>
            </div>
          </div> :
          <h1>active is false</h1>
      }
      <br />
      <hr />
      {
        
        Colors.map((item,index) => 
        <button key={index} onClick={() => bgColor (item)}>{item}</button>)
      }
    </div>

  )
}

export default ThirdComponent