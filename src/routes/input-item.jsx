import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    InputItem,
} from 'antd-mobile'

import SITE from '../config/site'

class InputItemExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='普通输入框'>
                    <InputItem
                        placeholder='受控输入框'
                        {...getFieldProps('basic')}
                    >
                        标题
                    </InputItem>
                </List>
                <List renderHeader='清除'>
                    <InputItem
                        clear
                        placeholder='带有清除内容功能的输入框'
                        {...getFieldProps('clear')}
                    >
                        标题
                    </InputItem>
                </List>
                <List renderHeader='禁止编辑 / 禁用'>
                    <InputItem
                        editable={false}
                        placeholder='禁止编辑'
                        {
                            ...getFieldProps('editable', {
                                initialValue: '罗辑',
                            })
                        }
                    >
                        姓名
                    </InputItem>
                    <InputItem
                        disabled
                        placeholder='禁用'
                        {
                            ...getFieldProps('disabled', {
                                initialValue: '罗辑',
                            })
                        }
                    >
                        姓名
                    </InputItem>
                </List>
                <List renderHeader='格式化'>
                    <InputItem
                        type='bankCard'
                        placeholder='请输入银行卡号'
                        {
                            ...getFieldProps('bankCard', {
                                initialValue: '8888 8888 8888 8888',
                            })
                        }
                    >
                        银行卡
                    </InputItem>
                    <InputItem
                        type='phone'
                        placeholder='请输入手机号'
                        {
                            ...getFieldProps('phone', {
                                initialValue: '151 1234 1234',
                            })
                        }
                    >
                        手机号
                    </InputItem>
                    <InputItem
                        type='password'
                        placeholder='请输入密码'
                        {
                            ...getFieldProps('password', {
                                initialValue: '123456',
                            })
                        }
                    >
                        密码
                    </InputItem>
                </List>
                <List renderHeader='自定义标题'>
                    <InputItem placeholder='没有标题' />
                    <InputItem
                        placeholder='请输入您的姓名'
                    >
                        <img src={SITE.LOGO} alt={SITE.TITLE} />
                    </InputItem>
                </List>
                <List renderHeader='自定义右侧内容'>
                    <InputItem
                        extra='￥'
                        placeholder='自定义右侧内容'
                    >
                        价格
                    </InputItem>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(InputItemExample))
