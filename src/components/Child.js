import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('Promtech')}>Greet Parent</button>
    </div>
  )
}
export default Child