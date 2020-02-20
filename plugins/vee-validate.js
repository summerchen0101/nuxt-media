import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
// import en from 'vee-validate/dist/locale/en.json'
import zhCN from 'vee-validate/dist/locale/zh_CN.json'

localize('zh_CN', {
  ...zhCN,
  names: {
    account: '帐号',
    pw: '密码',
    pw_c: '密码確認'
  }
})

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value)
    }
  },
  computesRequired: true
})

extend('account', {
  validate: val => /^\w{4,15}$/.test(val),
  message: '帐号格式错误'
})
extend('pw', {
  validate: val => /^\w{6,16}$/.test(val),
  message: '密码格式错误'
})

extend('match', {
  params: ['target'],
  validate (value, { target, targetName }) {
    return value === target
  },
  message: '不符合'
})

extend('pattern', {
  validate (val, { reg }) {
    return RegExp(reg).test(val)
  },
  params: ['reg'],
  message: '{_field_}规则不符'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)