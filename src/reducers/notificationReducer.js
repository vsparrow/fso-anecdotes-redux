
const notificationReducer = (state = '', action) => {
	console.log('notificationReducer state is', state)
	switch(action.type){
		case 'ADD_MESSAGE':
			return `you added '${action.message}'`
		case 'CLEAR_MESSAGE':
			return ''
		default:
			return state
	}
}

// action creator
export const addNotification=(message)=>({type:'ADD_MESSAGE', message})
export const clearNotification=()=>({type: 'CLEAR_MESSAGE', message:''})

export default notificationReducer