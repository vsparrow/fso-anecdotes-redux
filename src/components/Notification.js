import React from 'react'
import {connect} from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(props.notifcation.length === 0){return <div></div>}
  return (
    <div style={style}>
	  {props.notifcation}	  
    </div>
  )
}

const mapStateToProps = (state)=>({notifcation: state.notifcation})
export default connect(mapStateToProps)(Notification)