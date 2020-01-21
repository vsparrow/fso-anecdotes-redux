import React from 'react'
import {addVote} from '../reducers/anecdoteReducer'
import {addVoteNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteList = ({store})=>{
	
	const anecdotes = store.getState().anecdotes
	const vote = (id) => ()=>{
		store.dispatch(addVote(id))
		const anecdote = anecdotes.find(n => n.id === id).content
		store.dispatch(addVoteNotification(anecdote))
		setTimeout(()=>store.dispatch(clearNotification()),5000)
		
	}	
	
	return(
		<div>
			{anecdotes.sort((a,b)=>b.votes-a.votes ).map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AnecdoteList