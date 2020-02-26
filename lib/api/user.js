export const USER = {
  namespaced: false,
  apis: {
    login: {
      method: 'post',
      url: 'passport/member/login'
    },
    register: {
      method: 'post',
      url: 'client/register'
    },
    logout: {
      method: 'post',
      url: 'client/logout'
    },
    getProfile: {
      method: 'get',
      url: 'client/profile'
    },
    updateProfile: {
      method: 'put',
      url: 'client/profile'
    },
    updatePw: {
      method: 'put',
      url: 'client/profile/password'
    }
  }

}
