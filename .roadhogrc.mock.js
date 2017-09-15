import Mock from 'mockjs'
import user from './mock/user'
import updatePhone from './mock/updatePhone'

export default {
    ...user,
    ...updatePhone,
    'POST /api/login': (req, res) => {
        if ((req.body.account === 'username' || req.body.account === 'admin') && req.body.password === '123456') {
            if (req.body.account !== 'admin') {
                res.json({
                    status: 102,
                    message: '您没有权限登录',
                    data: null,
                })
            }
            else {
                res.json({
                    status: 1,
                    message: '登录成功',
                    data: Mock.mock({
                        token: /[a-zA-Z0-9]{32}/
                    }),
                })
            }
        }
        else {
            res.json({
                status: 101,
                message: '用户名或密码错误',
                data: null,
            })
        }
    },
    'GET /api/user/info': {
        status: 1,
        message: '用户身份已过期，请重新登录',
        data: {
            name: 'AshenOne'
        },
    },
    'GET /api/users': {
        status: 101,
        message: '用户列表获取失败',
        data: [
            {
                name: 'AshenOne'
            },
            {
                name: 'Jarvis'
            },
        ],
    },
}
