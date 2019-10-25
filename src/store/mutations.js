import {
  ADD_COUNTER,
  ADD_TO_CART,
  DEL_TO_CART
} from './mutations-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count += payload.selectedNum
  },
  [ADD_TO_CART](state, payload) {
    payload.count = payload.selectedNum
    payload.checked = true
    state.cartList.push(payload)
  },
  [DEL_TO_CART](state, payload) {
    const index = state.cartList.indexOf(payload)
    state.cartList.splice(index, 1);
  }
}
