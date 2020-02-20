export const initProfile = () => ({
  account: '',
  nick: '',
  phone: '',
  phone_approve: 'N',
  mail: '',
  mail_approve: 'N'
})
export default function () {
  return {
    login: false,
    token: '',
    profile: initProfile()
  }
}
