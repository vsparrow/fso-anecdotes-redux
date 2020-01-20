import React from 'react';
import {addVote, addAnecdote} from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store
  
  const vote = (id) => ()=>{store.dispatch(addVote(id))}
  const formHandler = (event)=>{
	  event.preventDefault()
	  const newAnecdote = event.target.newAnecdote.value
	  store.dispatch(addAnecdote(newAnecdote))
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={formHandler}>
        <div><input id='newAnecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App