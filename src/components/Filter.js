import React from 'react'
import {updateFilter} from '../reducers/filterReducer'

const Filter = ({store}) => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
	// update
	// console.log(event.target.value)
	store.dispatch(updateFilter(event.target.value))  
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter