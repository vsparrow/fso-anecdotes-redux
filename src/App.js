import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
// import anecdotesService from './services/anecdotes' //remove later
import {initalizeAnecdotes} from './reducers/anecdoteReducer'

const App =  (props) => {
	// const test =  ()=>{
	//   anecdotesService.getAll().then(a=>console.log(a))
  
	// }	
	// test()
	useEffect(()=>{props.initalizeAnecdotes()},[])	
  // const store = props.store
  // console.log('app state is', store.getState())
  // anecdotesService.createNew('this is a test note')  	
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