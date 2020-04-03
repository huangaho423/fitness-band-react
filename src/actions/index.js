export const addValue = (id, value, amt) => ({
  type: 'ADD_VALUE',
  id: id,
  value: value,
  amt: amt,
})
export const minusValue = (id, value, amt) => ({
  type: 'MINUS_VALUE',
  id: id,
  value: value,
  amt: amt,
})
