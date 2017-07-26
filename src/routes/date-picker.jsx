import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import moment from 'moment'

import {
    List,
    DatePicker,
} from 'antd-mobile'

const ListItem = List.Item

class PickerExample extends React.Component {
    submit = () => {
        console.log(this.props.form.getFieldsValue())
    }
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='基本'>
                    <DatePicker
                        mode='date'
                        title='选择日期'
                        extra='请选择'
                        {...getFieldProps('date')}
                    >
                        <ListItem arrow='horizontal'>日期</ListItem>
                    </DatePicker>
                    <DatePicker
                        mode='time'
                        title='选择时间'
                        extra='请选择'
                        {...getFieldProps('time')}
                    >
                        <ListItem arrow='horizontal'>时间</ListItem>
                    </DatePicker>
                    <DatePicker
                        mode='time'
                        title='选择时间'
                        extra='请选择'
                        minDate={moment('09:00', 'HH:mm')}
                        maxDate={moment('18:00', 'HH:mm')}
                        {...getFieldProps('time')}
                    >
                        <ListItem arrow='horizontal'>时间（限定范围）</ListItem>
                    </DatePicker>
                    <DatePicker
                        mode='datetime'
                        title='选择时间'
                        extra='请选择'
                        {...getFieldProps('datetime')}
                    >
                        <ListItem arrow='horizontal'>日期时间</ListItem>
                    </DatePicker>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(PickerExample))
