import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Button,
    Checkbox,
} from 'antd-mobile'

import {
    getCheckboxProps,
    filterUndefinedForArray,
} from '../utils/library'

const {
    AgreeItem,
    CheckboxItem,
} = Checkbox

const data = [
    { value: 0, label: '选项一' },
    { value: 1, label: '选项二' },
    { value: 2, label: '选项三' },
]

class CheckboxExample extends React.Component {
    render() {
        const {
            form,
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='CheckboxItem'>
                    {
                        data.map(({ label, value }, index) => (
                            <CheckboxItem
                                key={value}
                                {
                                    ...getFieldProps(`list.${index}`, {
                                        ...getCheckboxProps(value),
                                    })
                                }
                            >
                                {label}
                            </CheckboxItem>
                        ))
                    }
                </List>
                <AgreeItem {...getFieldProps('agree')}>
                    我同意《用户协议》
                </AgreeItem>
                <List renderHeader='获取值'>
                    <Button
                        onClick={() => {
                            console.log(filterUndefinedForArray(form.getFieldsValue().list))
                        }}
                    >
                        打印多选值
                    </Button>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(CheckboxExample))
