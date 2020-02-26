export default {
  ads: state => state.ads
    .reduce((obj, next) => {
      const items = next.advertisement.filter((ad) => {
        return ad.status === 'Y'
      })
      obj[next.id] = items || []
      return obj
    }, {}),
  indexTopAds: (state) => {
    const i = _.findIndex(state.ads, { id: 1 })
    return i > -1 ? state.ads[i].advertisement.filter((ad) => {
      return ad.status === 'Y'
    }) : []
  },
  indexBlockAds: (state) => {
    const i = _.findIndex(state.ads, { id: 2 })
    return i > -1 ? state.ads[i].advertisement.filter((ad) => {
      return ad.status === 'Y'
    }) : []
  }
}
