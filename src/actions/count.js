import * as actions from '../constans'
export function addNum (num) {
  return {
    type: actions.INCREATE,
    num
  }
}
export function reduceNum (num) {
  return {
    type: actions.DECREATE,
    num
  }
}