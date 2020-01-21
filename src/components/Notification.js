import React from 'react'

const Notification = ({store}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(store.getState().notifcation.length === 0){return <div></div>}
  return (
    <div style={style}>
	  {store.getState().notifcation}	  
    </div>
  )
}

export default Notification