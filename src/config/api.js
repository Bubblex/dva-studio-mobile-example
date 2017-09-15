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

    // 发送验证码
    VERIFY_MESSAGE: `${PREFIX}/verify/message`,

    // 绑定/验证手机号
    MEMBER_BIND: `${PREFIX}/member/bind`,

    // 获取用户详细信息
    FETCH_USER_INFO: `${PREFIX}/user/info`,
}
