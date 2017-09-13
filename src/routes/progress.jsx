import React from 'react'
import { connect } from 'dva'

import {
    List,
    Progress,
} from 'antd-mobile'

class ProgressExample extends React.Component {
    render() {
        return (
            <div>
                <List renderHeader='基本'>
                    <Progress percent={30} position='normal' />
                </List>
                <List renderHeader='隐藏未填充轨道'>
                    <Progress percent={30} position='normal' unfilled='hide' />
                </List>
                <List renderHeader='吸附在顶部'>
                    <Progress percent={60} position='fixed' unfilled='hide' />
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(ProgressExample)
