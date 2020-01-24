import React from 'react'
import {connect} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {addVoteNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteList = ({anecdotes, filter,...props})=>{
	const vote = (anecdote) => ()=>{
		props.addVote(anecdote)
		// const anecdote = anecdotes.find(n => n.id === id)
		props.addVoteNotification(anecdote.content)
		setTimeout(()=>props.clearNotification(),5000)
	}	
	
	return(
		<div>
			{props.anecdotesToShow.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}

const anecdotesToShow =	(state)=> {
	const anecdotes = state.anecdotes
		.filter(a=>a.content.toLowerCase().includes(state.filter.toLowerCase()))
		.sort((a,b)=>b.votes-a.votes)
	return anecdotes
}
	
const mapStateToProps = state => ({anecdotes: state.anecdotes, filter: state.filter, anecdotesToShow: anecdotesToShow(state)})
const mapDispatchToProps = {addVote,addVoteNotification,clearNotification} 

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)