import React from 'react'
import {connect} from 'react-redux'
import {updateFilter} from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {props.updateFilter(event.target.value)}
  const style = {marginBottom: 10}

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDipatchToProps = {updateFilter}
export default connect(null, mapDipatchToProps)(Filter)