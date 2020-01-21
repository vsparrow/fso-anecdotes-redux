
const notificationReducer = (state = 'some notification', action) => {
	console.log('notificationReducer state is', state)
	switch(action.type){
		case 'ADD_MESSAGE': //<-----------------do something here
			console.log('action in notificationReducer is', action)
			return action.message
		case 'CLEAR_MESSAGE':
			return ''
		default:
			return state
	}
}

// action creator
export const addNotification=(message)=>({type:'ADD_MESSAGE', message})

export default notificationReducer