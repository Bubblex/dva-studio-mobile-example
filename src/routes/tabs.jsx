import React from 'react'
import { connect } from 'dva'

import {
    List,
    Tabs,
} from 'antd-mobile'

import styles from './tabs/tabs.less'

const TabPane = Tabs.TabPane

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
    backgroundColor: '#fff',
}

class TabsExample extends React.Component {
    render() {
        return (
            <div>
                <List renderHeader='标签吸附顶部'>
                    <Tabs defaultActiveKey='2' className={styles.tabs}>
                        <TabPane tab='全部' key='1'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='待支付' key='2'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='待收货' key='3'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='已完成' key='4'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='已取消' key='5'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                    </Tabs>
                </List>
                <List renderHeader='基本'>
                    <Tabs defaultActiveKey='2'>
                        <TabPane tab='全部' key='1'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='待支付' key='2'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='待收货' key='3'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='已完成' key='4'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                        <TabPane tab='已取消' key='5'>
                            <div style={{ ...style }}>暂无订单</div>
                        </TabPane>
                    </Tabs>
                </List>
                <List renderHeader='无动画'>
                    <Tabs animated={false}>
                        <TabPane tab='全部' key='1'>
                            <div style={{ ...style }}>全部暂无订单</div>
                        </TabPane>
                        <TabPane tab='待支付' key='2'>
                            <div style={{ ...style }}>待支付暂无订单</div>
                        </TabPane>
                        <TabPane tab='待收货' key='3'>
                            <div style={{ ...style }}>待收货暂无订单</div>
                        </TabPane>
                        <TabPane tab='已完成' key='4'>
                            <div style={{ ...style }}>已完成暂无订单</div>
                        </TabPane>
                        <TabPane tab='已取消' key='5'>
                            <div style={{ ...style }}>已取消暂无订单</div>
                        </TabPane>
                    </Tabs>
                </List>
                <List renderHeader='标签超出界面宽度'>
                    <Tabs pageSize={4}>
                        <TabPane tab='全部' key='1'>
                            <div style={{ ...style }}>全部暂无订单</div>
                        </TabPane>
                        <TabPane tab='待支付' key='2'>
                            <div style={{ ...style }}>待支付暂无订单</div>
                        </TabPane>
                        <TabPane tab='待收货' key='3'>
                            <div style={{ ...style }}>待收货暂无订单</div>
                        </TabPane>
                        <TabPane tab='待发货' key='4'>
                            <div style={{ ...style }}>待发货暂无订单</div>
                        </TabPane>
                        <TabPane tab='已完成' key='5'>
                            <div style={{ ...style }}>已完成暂无订单</div>
                        </TabPane>
                        <TabPane tab='已取消' key='6'>
                            <div style={{ ...style }}>已取消暂无订单</div>
                        </TabPane>
                    </Tabs>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(TabsExample)
