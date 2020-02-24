export const initProfile = () => ({
  account: '',
  phone: '',
  email: ''
})
export default function () {
  return {
    login: false,
    token: '',
    profile: initProfile()
  }
}
