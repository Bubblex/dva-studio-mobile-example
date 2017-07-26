import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Stepper,
} from 'antd-mobile'

const ListItem = List.Item

class StepperExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='基本'>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={10}
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('basic', {
                                        initialValue: 1,
                                    })
                                }
                            />
                        }
                    >
                        标题
                    </ListItem>
                </List>
                <List renderHeader='小数'>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={100}
                                step={0.01}
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('decimal', {
                                        initialValue: 1,
                                    })
                                }
                            />
                        }
                    >
                        标题
                    </ListItem>
                </List>
                <List renderHeader='步数'>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={100}
                                step={5}
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('step', {
                                        initialValue: 0,
                                    })
                                }
                            />
                        }
                    >
                        标题
                    </ListItem>
                </List>

                <List renderHeader='禁用 / 只读'>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={100}
                                step={5}
                                disabled
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('step', {
                                        initialValue: 0,
                                    })
                                }
                            />
                        }
                    >
                        禁用
                    </ListItem>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={100}
                                step={5}
                                readOnly
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('step', {
                                        initialValue: 10,
                                    })
                                }
                            />
                        }
                    >
                        只读
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(StepperExample))
