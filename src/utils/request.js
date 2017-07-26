import fetch from 'dva/fetch'
import { browserHistory } from 'dva/router'

import { Toast } from 'antd-mobile'
import auth from './auth'
import ROUTES from '../config/routes'

/**
 * 请求默认参数
 * @type {object}
 * @property {string} mode 跨域请求模式
 * @property {string} method 请求方式 GET 或 POST
 * @property {object} headers 请求 header
 * @property {boolean} isCheckToken 是否验证 token
 */
const DEFAULT = {
    mode: 'cors',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    checkToken: false,
}

/**
 * 检测响应状态码
 *
 * @param {any} response 响应参数
 * @return {object} 响应参数或 error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
}

/**
 * 格式化响应参数为 JSON
 *
 * @param {object} response 响应参数
 * @return {object} 格式化后的响应参数
 */
function parseJSON(response) {
    return response.json()
}

/**
 * 验证函数限制，只执行一次
 * @type {boolean}
 */
let flag = true

/**
 * 验证 token
 *
 * @param {boolean} isCheckToken 是否进行验证
 * @return {function} 验证函数
 */
function checkToken(isCheckToken) {
    return (response) => {
        if (isCheckToken && !auth.getToken() && flag) {
            Toast.warn(response.message, 1.5, () => {
                flag = true
                browserHistory.push(ROUTES.LOGIN)
            })
        }
        return response
    }
}

/**
 * 显示指定的响应参数错误信息
 * 当响应参数 status 在 101 至 999 时，通过 antd 中的 message 组件展示消息
 * @param {object} response 响应参数
 * @return {object} 响应参数
 */
function showMessage(response) {
    if (response.status > 100 && response.status < 1000) {
        Toast.error(response.message)
    }
    return response
}

/**
 * 请求一个 URL，返回一个 Promise
 *
 * @param {string} url 请求地址
 * @param {object} [options] 请求参数，可配置项参数参考 Fetch API：
 * https://github.com/github/fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * @return {object} 返回响应参数 response 或异常信息 err
 */
export default function request(url, options) {
    const {
        checkToken: isCheckToken,
        ...fetchOptions
    } = Object.assign({}, DEFAULT, options)

    return fetch(url, fetchOptions)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkToken(isCheckToken))
        .then(showMessage)
        .then(response => ({ response }))
        .catch(err => ({ err }))
}
