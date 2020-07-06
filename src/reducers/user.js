import * as  actions from '@/constans'
export const user = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_USER :
      Array.prototype.push.call(state, action.num)
      return state
    case actions.REDUCE_USER:
      Array.prototype.pop.call(state)
      return state
    default: 
      return state
  }
}