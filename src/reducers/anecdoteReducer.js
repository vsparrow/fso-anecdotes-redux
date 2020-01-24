import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_VOTE':
			const toUpdate = state.find(anecdote =>action.data.id === anecdote.id)
			toUpdate.votes++
			const filteredState = state.filter(anecdote =>action.data.id !== anecdote.id)
			return [...filteredState,toUpdate]
		case 'ADD_ANECDOTE':
			return [...state, action.data]
		case 'INIT_NOTES':
			return action.data
		default:
			return state
	}
	// return state
}

//action creator
export const addVote = anecdote => {
	return async dispatch => {
		const updatedAnecdote = await anecdoteService.addVote(anecdote)
		dispatch({type: 'ADD_VOTE', data: {id: updatedAnecdote.id, votes: updatedAnecdote.votes}})
	}
}
export const addAnecdote = (content) =>{
	return async dispatch =>{
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch({type: 'ADD_ANECDOTE', data: newAnecdote})
	}
}
export const initalizeAnecdotes = ()=>{
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({type: 'INIT_NOTES', data: anecdotes})
	}
}

export default reducer