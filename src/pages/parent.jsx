import React from 'react'
import Child from './child'
export default class Parent extends React.Component {
  render () {
    return (
      <div>
        <Child onEvent={this.childFrom}></Child>
      </div>
    )
  }
  childFrom = (e) => {
    console.log(e)
  }
}
