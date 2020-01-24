import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {initalizeAnecdotes} from './reducers/anecdoteReducer'

const App =  (props) => {
	useEffect(()=>{props.initalizeAnecdotes()},[])	
	
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

export default connect(null,{initalizeAnecdotes})(App)