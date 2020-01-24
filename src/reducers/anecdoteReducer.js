import anecdoteService from '../services/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_VOTE':
			const toUpdate = state.find(anecdote =>action.data.id === anecdote.id)
			toUpdate.votes++
			const filteredState = state.filter(anecdote =>action.data.id !== anecdote.id)
			return [...filteredState,toUpdate]
		case 'ADD_ANECDOTE':
			// const newAnecdote = {content: action.data.content, votes: 0, id: getId()}
			return [...state, action.data]
		case 'INIT_NOTES':
			return action.data
		default:
			return state
	}
	// return state
}

//action creator
export const addVote = (id)=>{
	return ({type: 'ADD_VOTE', data: {id}})
}

// export const addAnecdote = (newAnecdote)=>{ //before database
// 	return ({type: 'ADD_ANECDOTE', data: {content: newAnecdote}})
// }
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