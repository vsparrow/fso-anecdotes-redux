import axios from 'axios'
const baseUrl = 'http://korea-ide-api-3001.run.goorm.io/anecdotes'

const getAll = async ()=>{
	const res = await axios.get(baseUrl)
	return res.data
}

const createNew = async (content)=>{
	const newObject = {content, votes: 0}
	const res = await axios.post(baseUrl,newObject)
	return res.data
}

const addVote = async anecdote => {
	console.log('anecdote is', anecdote)
	const newObject = {content: anecdote.content, votes: anecdote.votes+1}
	// const newObject = {content: anecdote.content, votes: 5}
	const res = await axios.put(`${baseUrl}/${anecdote.id}`, newObject)
	//trying patch first
	// const res = await axios.patch(`${baseUrl}/${anecdote.id}`, {votes: anecdote.vote+1})
	console.log(res.data)
	return res.data
}

export default {getAll,createNew,addVote}
