import Cookies from 'js-cookie'

const TokenKey = 'userInfo'

var getUserInfo = function() {
    let userInfo = JSON.parse(Cookies.get(TokenKey) || '{}');
    return userInfo;
}

export function updateUserInfo(data) {
  let userInfo = JSON.parse(Cookies.get(TokenKey) || '{}');
    Object.assign(userInfo, data);
    Cookies.set(TokenKey, userInfo)
}

export function setToken(token) {
  return Cookies.set(TokenKey, {token: token})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getLang() {
    const userInfo = getUserInfo();
    return userInfo.lang || 'zh-CN';
}

export function getToken() {
  const userInfo = JSON.parse(Cookies.get(TokenKey) || '{}');
  return userInfo.token || '';
}

export function getUserId() {
  const userInfo = JSON.parse(Cookies.get(TokenKey) || '{}');
  return userInfo.userId || '';
}
