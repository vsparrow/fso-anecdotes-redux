
const filterReducer = (state='',action)=>{
	switch(action.type){
		case 'UPDATE_FILTER':
			return action.filter
		// case 'CLEAR_FILTER':
		// 	return ''
		default:
			return state
	}
}

//action creators
export const updateFilter = (filter)=>({type:'UPDATE_FILTER', filter})
// export const clearFilter = ()=>({type:'CLEAR_FILTER', filter:''})

export default filterReducer