/*
  * Helpers
  */

export const idGenerator = () => {
  return "S0" + (Math.random().toString(6).substr(2, 6)).toUpperCase()
}
