import {request} from './request'

export function loginApi (account, password) {
  return request({
    url: '/learnvue/login',
    method: 'POST',
    body: {
      account: account,
      password: password
    }
  })
}