import { combineReducers } from 'redux'

//建立reducer
//購物車商品數量陣列
const total = (state = [], action) => {
  //找尋是否以出現在購物車
  let index = state.map(v => v.id).indexOf(action.id)
  switch (action.type) {
    case 'ADD_VALUE':
      if (index >= 0) {
        state[index] = {
          id: action.id,
          qty: state[index].qty + action.qty,
          amt: action.amt,
        }
      } else {
        state.push({ id: action.id, qty: action.qty, amt: action.amt })
      }
      return state
    case 'MINUS_VALUE':
      if (index >= 0) {
        state[index] = {
          id: action.id,
          qty:
            state[index].qty === 0
              ? state[index].qty
              : state[index].qty - action.qty,
          amt: action.amt,
        }
      }
      return state
    default:
      return state
  }
}

// 合併多個reducer
const rootReducer = combineReducers({
  total,
})

export { rootReducer }
