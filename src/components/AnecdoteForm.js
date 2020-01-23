import React from 'react'
import {connect} from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'
import {addNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props)=>{

	const formHandler = (event)=>{
		event.preventDefault()
		const newAnecdote = event.target.newAnecdote.value
		props.addAnecdote(newAnecdote)
		props.addNotification(newAnecdote)
		setTimeout(()=>props.clearNotification(),5000)
		event.target.newAnecdote.value = ''
  	}
	
	return(
		<div>			
			<h2>create new</h2>		
			<form onSubmit={formHandler}>
				<div><input id='newAnecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</div>			
	)
}

const mapDispatchToProps = {addAnecdote, addNotification, clearNotification}
// export default AnecdoteForm
export default connect(null, mapDispatchToProps)(AnecdoteForm)