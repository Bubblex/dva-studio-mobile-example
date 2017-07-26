/**
 * 接口统一前缀
 * @type {string}
 */
const PREFIX = '/api'

export default {
    // 登录
    LOGIN: `${PREFIX}/login`,

    // 获取用户列表
    FETCH_USERS: `${PREFIX}/users`,

    // 获取用户详细信息
    FETCH_USER_INFO: `${PREFIX}/user/info`,
}
