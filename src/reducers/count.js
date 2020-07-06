import  * as actions from '../constans/index'
const counter = ( state = 0, action) => {
  switch (action.type) {
    case actions.INCREATE:
      return state + action.num
    case actions.DECREATE:
      return state -action.num
    default:
      return state
  }
}
export default counter