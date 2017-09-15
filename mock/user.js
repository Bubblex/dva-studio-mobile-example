import Mock from 'mockjs'

import { generatePaginateData } from './lib'

export default {
    'POST /api/user/info': (req, res) => {
        const mock = Mock.mock({
            title: '@cname()',
            phone: /[0-9]{11}/,
            id: '@natural(1, 9999)',
            image: '@image("200x200")',
            content: '@csentence(50, 150)',
            date: '@datetime("yyyy.MM.dd")',
        })

        res.end(JSON.stringify({
            status: 1,
            message: '查询成功',
            data: generatePaginateData(mock, req.body, { dataName: 'user' }),
        }))
    },
}
