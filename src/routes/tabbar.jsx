import React from 'react'
import { connect } from 'dva'

import {
    TabBar,
} from 'antd-mobile'

import LOGO from '../assets/logo.png'

const TabBarItem = TabBar.Item

class TabbarExample extends React.Component {
    render() {
        return (
            <div>
                <TabBar>
                    <TabBarItem
                        title='首页'
                        key='1'
                        icon={
                            <div
                                style={{
                                    width: '0.44rem',
                                    height: '0.44rem',
                                    background: `url(${LOGO})`,
                                    backgroundSize: '0.44rem',
                                }}
                            />
                        }
                    />
                    <TabBarItem
                        title='购物车'
                        key='2'
                        dot='true'
                        icon={
                            <div
                                style={{
                                    width: '0.44rem',
                                    height: '0.44rem',
                                    background: `url(${LOGO})`,
                                    backgroundSize: '0.44rem',
                                }}
                            />
                        }
                    />
                    <TabBarItem
                        title='我的'
                        key='3'
                        icon={
                            <div
                                style={{
                                    width: '0.44rem',
                                    height: '0.44rem',
                                    background: `url(${LOGO})`,
                                    backgroundSize: '0.44rem',
                                }}
                            />
                        }
                    />
                </TabBar>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(TabbarExample)
