import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdotesService from './services/anecdotes'

const App =  (props) => {
  const test =  ()=>{
	  anecdotesService.getAll().then(a=>console.log(a))
  
  }	
	test()
  // const store = props.store
  // console.log('app state is', store.getState())
  return (
    <div>
      <h2>Anecdotes</h2>
	  <Notification />
	  <Filter 	/>  
	  <AnecdoteForm  />
	  <AnecdoteList  />	  
    </div>
  )
}

export default App