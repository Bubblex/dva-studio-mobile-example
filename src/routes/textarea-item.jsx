import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    TextareaItem,
} from 'antd-mobile'

class TextareaItemExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='基本'>
                    <TextareaItem
                        title='标题'
                        placeholder='受控输入框'
                        {...getFieldProps('basic')}
                    />
                </List>
                <List renderHeader='自动 / 固定高度'>
                    <TextareaItem
                        title='自动高度'
                        autoHeight
                        placeholder='请输入内容'
                        {...getFieldProps('auto')}
                    />
                    <TextareaItem
                        rows={3}
                        title='固定高度'
                        placeholder='请输入内容'
                        {...getFieldProps('fix')}
                    />
                </List>
                <List renderHeader='清除内容'>
                    <TextareaItem
                        clear
                        title='标题'
                        autoHeight
                        placeholder='请输入内容'
                        {...getFieldProps('clear')}
                    />
                </List>
                <List renderHeader='计数'>
                    <TextareaItem
                        rows={5}
                        count={500}
                        title='标题'
                        placeholder='请输入内容'
                        {...getFieldProps('count')}
                    />
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(TextareaItemExample))
