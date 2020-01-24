import axios from 'axios'
const baseUrl = 'http://korea-ide-api-3001.run.goorm.io/anecdotes'

const getAll = async ()=>{
	const res = await axios.get(baseUrl)
	return res.data
}

const createNew = async (content)=>{
	const newObject = {content, votes: 0}
	const res = await axios.post(baseUrl,newObject)
	console.log(res.data)
}
export default {getAll,createNew}
