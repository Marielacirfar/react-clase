import React from 'react'

 function MainConRender(props) {
  return (
    <div>
       <main> {props.render()}</main>
      
    </div>
  )
}
export default MainConRender
