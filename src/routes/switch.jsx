import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Switch,
} from 'antd-mobile'

const ListItem = List.Item

class SwitchExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='Switch'>
                    <ListItem
                        extra={
                            <Switch
                                {
                                    ...getFieldProps('switch_on', {
                                        initialValue: true,
                                        valuePropName: 'checked',
                                    })
                                }
                            />
                        }
                    >
                        On
                    </ListItem>
                    <ListItem
                        extra={
                            <Switch
                                {
                                    ...getFieldProps('switch_off', {
                                        initialValue: false,
                                        valuePropName: 'checked',
                                    })
                                }
                            />
                        }
                    >
                        Off
                    </ListItem>
                    <ListItem
                        extra={
                            <Switch
                                disabled
                                {
                                    ...getFieldProps('switch_disabled_on', {
                                        initialValue: true,
                                        valuePropName: 'checked',
                                    })
                                }
                            />
                        }
                    >
                        Disabled On
                    </ListItem>
                    <ListItem
                        extra={
                            <Switch
                                disabled
                                {
                                    ...getFieldProps('switch_disabled_off', {
                                        initialValue: false,
                                        valuePropName: 'checked',
                                    })
                                }
                            />
                        }
                    >
                        Disabled Off
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(SwitchExample))
