import React from 'react'
import { connect } from 'dva'
import { List } from 'antd-mobile'

class PageG2Line extends React.Component {
    componentDidMount() {
        const chart = new GM.Chart({
            id: 'c1',
        })

        const gmchartdata = [
            { created_at: '2016-08-01 00:00:0', num: 240 },
            { created_at: '2016-08-02 00:00:0', num: 260 },
            { created_at: '2016-08-03 00:00:0', num: 250 },
            { created_at: '2016-08-04 00:00:0', num: 260 },
            { created_at: '2016-08-05 00:00:0', num: 280 },
            { created_at: '2016-08-06 00:00:0', num: 220 },
            { created_at: '2016-08-07 00:00:0', num: 270 },
        ]

        const defs = {
            created_at: {
                type: 'timeCat',
                mask: 'mm/dd',
                tickCount: 7,
                range: [0, 1],
            },
            num: {
                min: 0,
            },
        }

        chart.axis('num', false)

        chart.axis('created_at', {
            label: {
                fontSize: 28,
            },
        })

        chart.source(gmchartdata, defs)

        // 生成渐变色
        const canvas = document.getElementById('c1')
        const linearGradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 600)
        linearGradient.addColorStop(0.5, '#f0f0f0')
        linearGradient.addColorStop(0, 'red')

        // 填充渐变色
        chart.area().position('created_at*num').color('city', () => {
            return linearGradient
        }).style({ opacity: 0.6 })

        // 绘制线图
        chart.line().position('created_at*num').color('red').size('4')
        chart.point().position('created_at*num').color('red')

        gmchartdata.forEach((obj) => {
            chart.guide().html([obj.created_at, obj.num],
                `<div style='color: red'><span>${obj.num}</span></div>`,
                {
                    align: 'tc',
                    offset: [0, -16],
                })
        })

        chart.render()
    }

    render() {
        return (
            <div>
                <List renderHeader='g2折线图'>
                    <div style={{ width: '100%', height: '300px' }}>
                        <canvas id='c1' style={{ width: '100%', height: '100%' }} />
                    </div>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(PageG2Line)
