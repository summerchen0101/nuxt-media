export default {
  info: state => state.info
    .filter(t => t.status === 'Y')
    .reduce((obj, next) => {
      obj[next.code] = next
      return obj
    }, {})

}
