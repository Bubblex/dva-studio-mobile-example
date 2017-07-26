import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Picker,
} from 'antd-mobile'

const ListItem = List.Item

const basicData = [
    {
        label: '北京市',
        value: 1000,
        children: [
            {
                label: '北京市',
                value: 1001,
            },
        ],
    },
    {
        label: '天津市',
        value: 2000,
        children: [
            {
                label: '天津市',
                value: 2001,
            },
        ],
    },
    {
        label: '深圳',
        value: 3000,
        children: [
            {
                label: '深圳',
                value: 3001,
            },
        ],
    },
    {
        label: '广州',
        value: 4000,
        children: [
            {
                label: '广州',
                value: 40001,
            },
        ],
    },
]

const areaData = [
    {
        label: '北京市',
        value: 1000,
    },
    {
        label: '天津市',
        value: 2000,
    },
    {
        label: '深圳',
        value: 3000,
    },
    {
        label: '广州',
        value: 4000,
    },
]

const seasonsData = [
    [
        {
            label: 2016,
            value: 2016,
        },
        {
            label: 2017,
            value: 2017,
        },
    ],
    [
        {
            label: '春',
            value: 1,
        },
        {
            label: '夏',
            value: 2,
        },
        {
            label: '秋',
            value: 3,
        },
        {
            label: '冬',
            value: 4,
        },
    ],
]

class PickerExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='基本'>
                    <Picker
                        cols={2}
                        extra='请选择'
                        title='选择地区'
                        data={basicData}
                        {...getFieldProps('basic')}
                    >
                        <ListItem arrow='horizontal'>选择地区</ListItem>
                    </Picker>
                </List>
                <List renderHeader='单列'>
                    <Picker
                        cols={1}
                        extra='请选择'
                        title='选择地区'
                        data={areaData}
                        {...getFieldProps('single')}
                    >
                        <ListItem arrow='horizontal'>选择地区</ListItem>
                    </Picker>
                </List>
                <List renderHeader='多列（不联动）'>
                    <Picker
                        extra='请选择'
                        title='选择季节'
                        cascade={false}
                        data={seasonsData}
                        {...getFieldProps('seasons')}
                    >
                        <ListItem arrow='horizontal'>选择季节</ListItem>
                    </Picker>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(PickerExample))
