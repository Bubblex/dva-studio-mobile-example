import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    InputItem,
} from 'antd-mobile'

import { getInputItemError } from '../utils/library'

class ValidateExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
                getFieldError,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='普通验证'>
                    <InputItem
                        clear
                        placeholder='长度不能超过4个字符'
                        {
                            ...getFieldProps('basic', {
                                rules: [
                                    {
                                        max: 4,
                                        message: '长度不能超过4个字符',
                                    },
                                ],
                            })
                        }
                        {...getInputItemError(getFieldError('basic'))}
                    >
                        标题
                    </InputItem>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(ValidateExample))
