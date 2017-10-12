import React from 'react'
import { connect } from 'dva'
import { List } from 'antd-mobile'

class PageLineEchart extends React.Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('maink'))

        // 指定图表的配置项和数据
        const data = [
            ['06/05', 9400],
            ['06/06', 3400],
            ['06/07', 4000],
            ['06/08', 6400],
            ['06/09', 1000],
            ['06/10', 4000],
            ['06/11', 3400],
        ]

        const dateList = data.map((item) => {
            return item[0]
        })
        const valueList = data.map((item) => {
            return item[1]
        })
        const option = {
            visualMap: {
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400,
            },


            title: {
                left: 'center',
                text: '近7天收益',
                textStyle: {
                    fontSize: 30,
                },
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: dateList,
                boundaryGap: false,
                // name: '时间',
                // nameTextStyle: {
                //     fontSize: 26,
                // },
                axisLabel: {
                    textStyle: {
                        fontSize: 26,
                    },
                },
            },
            yAxis: {
                // show: false,
                axisLabel: {
                    show: false,
                },
                // splitLine: { show: false },
            },
            series: [{
                type: 'line',
                data: valueList,
                symbol: 'roundRect',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        width: 3,
                    },
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 26,
                        },
                        distance: 16,
                        position: 'top',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 30,
                        },
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)',
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .5)',
                        }]),
                    },
                },
            }],
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
    }

    render() {
        return (
            <div>
                <List renderHeader='echart折线图'>
                    <div id='maink' style={{ width: '100%', height: '600px' }} />
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(PageLineEchart)
