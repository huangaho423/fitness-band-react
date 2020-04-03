import { combineReducers } from 'redux'

//建立reducer
//購物車商品數量陣列
const total = (state = [], action) => {
  //找尋是否以出現在購物車
  let index = state.map(v => v.id).indexOf(action.id)
  switch (action.type) {
    //-----增加數量-----
    case 'ADD_VALUE':
      //若該物件有出現在陣列
      if (index >= 0) {
        //若沒有超過庫存
        if (action.qty > state[index].value) {
          //增加數量
          state[index] = {
            id: action.id,
            value: state[index].value + action.value,
            amt: action.amt,
            qty: action.qty,
            name: action.name,
            bgX: action.bgX,
            bgY: action.bgY,
          }
        }
      } else {
        //放入陣列
        state.push({
          id: action.id,
          value: action.value,
          amt: action.amt,
          qty: action.qty,
          name: action.name,
          bgX: action.bgX,
          bgY: action.bgY,
        })
      }
      return state
    //-----減少數量-----
    case 'MINUS_VALUE':
      //若該物件有出現在陣列
      if (index >= 0) {
        //若有購買數量
        if (state[index].value - action.value >= 1) {
          //減少數量
          state[index] = {
            id: action.id,
            value: state[index].value - action.value,
            amt: action.amt,
            qty: action.qty,
            name: action.name,
            bgX: action.bgX,
            bgY: action.bgY,
          }
        } else {
          //移除物件
          state.splice(index, 1)
        }
      }
      return state
    default:
      //判斷有無local Storage,若有則帶入預設購買數量
      // console.log(JSON.parse(localStorage.getItem('cart')))
      if (JSON.parse(localStorage.getItem('cart')) !== null) {
        return JSON.parse(localStorage.getItem('cart'))
      } else {
        return state
      }
  }
}

// 合併多個reducer
const rootReducer = combineReducers({
  total,
})

export { rootReducer }
