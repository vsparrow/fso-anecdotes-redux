
const notificationReducer = (state = '', action) => {

	switch(action.type){
		case 'ADD_MESSAGE':
			return `you added '${action.message}'`
		case 'CLEAR_MESSAGE':
			return ''
		case 'ADD_VOTE_NOTIFICATION':
			return `you voted for '${action.message}'`
		default:
			return state
	}
}

// action creator
export const addNotification=(message)=>({type:'ADD_MESSAGE', message})
export const clearNotification=()=>({type: 'CLEAR_MESSAGE', message:''})
export const addVoteNotification=(message)=>({type:'ADD_VOTE_NOTIFICATION', message})

export default notificationReducer