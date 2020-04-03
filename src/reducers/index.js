import { combineReducers } from 'redux'

//建立reducer
//購物車商品數量陣列
const total = (state = [], action) => {
  //找尋是否以出現在購物車
  let index = state.map(v => v.id).indexOf(action.id)
  switch (action.type) {
    //增加數量
    case 'ADD_VALUE':
      if (index >= 0) {
        state[index] = {
          id: action.id,
          value: state[index].value + action.value,
          amt: action.amt,
        }
      } else {
        state.push({ id: action.id, value: action.value, amt: action.amt })
      }
      return state
    //減少數量
    case 'MINUS_VALUE':
      if (index >= 0) {
        if (state[index].value - action.value >= 1) {
          state[index] = {
            id: action.id,
            value: state[index].value - action.value,
            amt: action.amt,
          }
        } else {
          state.splice(index, 1)
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
