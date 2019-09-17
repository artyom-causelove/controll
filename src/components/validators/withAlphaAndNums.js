export default value => {
  return /[\D]/.test(value) && /[\d]/.test(value)
}
