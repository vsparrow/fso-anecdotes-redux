import React from 'react'
import {connect} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {addVoteNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteList = ({anecdotes, filter,...props})=>{
		anecdotes
		.filter(a=>
				a.content.toLowerCase().includes(filter.toLowerCase()))
	const vote = (id) => ()=>{
		props.addVote(id)
		const anecdote = anecdotes.find(n => n.id === id).content
		props.addVoteNotification(anecdote)
		setTimeout(()=>props.clearNotification(),5000)
		
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
const mapStateToProps = state => ({anecdotes: state.anecdotes, filter: state.filter})
const mapDispatchToProps = {addVote,addVoteNotification,clearNotification} 

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)