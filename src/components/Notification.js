import React from 'react'

const Notification = ({store}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
	  <br></br>	  
	  {store.getState().anecdotes.length}
	  <br></br>	  
	  {store.getState().notifcation}	  
    </div>
  )
}

export default Notification