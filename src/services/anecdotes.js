import axios from 'axios'
const baseUrl = 'http://korea-ide-api-3001.run.goorm.io/anecdotes'

const getAll = async ()=>{
	const res = await axios.get(baseUrl)
	return res.data
}

export default {getAll}
