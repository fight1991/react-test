import * as actions from '../constans'
export function addUser (num) {
  return {
    type: actions.ADD_USER,
    num
  }
}
export function reduceUser (num) {
  return {
    type: actions.REDUCE_USER,
    num
  }
}