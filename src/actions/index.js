export const addValue = (id, qty, amt) => ({
  type: 'ADD_VALUE',
  id: id,
  qty: qty,
  amt: amt,
})
export const minusValue = (id, qty, amt) => ({
  type: 'MINUS_VALUE',
  id: id,
  qty: qty,
  amt: amt,
})
