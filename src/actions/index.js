// id 商品編號
// value 購買數量
// amt 金額
// qty 庫存數量
export const addValue = (id, value, amt, qty, name, bgX, bgY) => ({
  type: 'ADD_VALUE',
  id: id,
  value: value,
  amt: amt,
  qty: qty,
  name: name,
  bgX: bgX,
  bgY: bgY,
})
export const minusValue = (id, value, amt, qty, name, bgX, bgY) => ({
  type: 'MINUS_VALUE',
  id: id,
  value: value,
  amt: amt,
  qty: qty,
  name: name,
  bgX: bgX,
  bgY: bgY,
})
