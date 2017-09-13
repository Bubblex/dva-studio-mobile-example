import React from 'react'
import { connect } from 'dva'

import {
    List,
    Steps,
    Button,
} from 'antd-mobile'

const Step = Steps.Step
const ListItem = List.Item

class StepsExample extends React.Component {
    render() {
        return (
            <div>
                <List renderHeader='小尺寸'>
                    <ListItem>
                        <Steps size='small' current={1}>
                            <Step title='已下单（订单编号：123445677）' description='2017-8-2 09：56：07' />
                            <Step title='已付款' description='2017-8-2 09：56：07' />
                            <Step title='已到自提点' status='error' description='2017-8-2 09：56：07' />
                            <Step title='已取货' description='2017-8-2 09：56：07' />
                            <Step title='退款中' description='2017-8-2 09：56：07' />
                            <Step title='退款成功' description='2017-8-2 09：56：07' />
                        </Steps>
                    </ListItem>
                </List>
                <List renderHeader='小尺寸'>
                    <ListItem>
                        <Steps size='small' current={1}>
                            <Step title='已下单（订单编号：123445677）' description='2017-8-2 09：56：07' />
                            <Step title='已付款' description='2017-8-2 09：56：07' />
                            <Step
                                title={
                                    <div>已到提货点
                                        <p>
                                            <span>居乐园小区南门</span>
                                            <Button inline='true' >地图导航</Button>
                                        </p>
                                        <p>自提点管理员：王大爷</p>
                                        <p>手机号：14751376919</p>
                                    </div>
                                }
                                status='error'
                                description='2017-8-2 09：56：07'
                            />
                            <Step title='已取货' description='2017-8-2 09：56：07' />
                            <Step title='退款中' description='2017-8-2 09：56：07' />
                            <Step title='退款成功' description='2017-8-2 09：56：07' />
                        </Steps>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(StepsExample)
