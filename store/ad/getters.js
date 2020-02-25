export default {
  ads: state => state.ads
    .reduce((obj, next) => {
      const items = next.advertisement.filter((ad) => {
        return ad.status === 'Y'
      })
      obj[next.id] = items || []
      return obj
    }, {})
}
