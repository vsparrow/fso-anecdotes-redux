import React from 'react'
import {addAnecdote} from '../reducers/anecdoteReducer'
import {addNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteForm = ({store})=>{

	const formHandler = (event)=>{
		event.preventDefault()
		const newAnecdote = event.target.newAnecdote.value
		store.dispatch(addAnecdote(newAnecdote))
		store.dispatch(addNotification(newAnecdote))
		setTimeout(()=>store.dispatch(clearNotification()),5000)
		// setTimeout(()=>console.log('ok here'),2000)
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

export default AnecdoteForm