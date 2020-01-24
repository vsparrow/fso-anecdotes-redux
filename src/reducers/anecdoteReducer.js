// import redux from 'redux'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_VOTE':
			const toUpdate = state.find(anecdote =>action.data.id === anecdote.id)
			toUpdate.votes++
			const filteredState = state.filter(anecdote =>action.data.id !== anecdote.id)
			return [...filteredState,toUpdate]
		case 'ADD_ANECDOTE':
			const newAnecdote = {content: action.data.content, votes: 0, id: getId()}
			return [...state, newAnecdote]
		default:
			return state
	}
	// return state
}

//action creator
export const addVote = (id)=>{
	return ({type: 'ADD_VOTE', data: {id}})
}

export const addAnecdote = (newAnecdote)=>{
	return ({type: 'ADD_ANECDOTE', data: {content: newAnecdote}})
}

export default reducer