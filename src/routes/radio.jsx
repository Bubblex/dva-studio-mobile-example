import React from 'react'
import classNames from 'classnames'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Radio,
    Button,
} from 'antd-mobile'

import {
    getRadioProps,
} from '../utils/library'

import styles from './radio/radio.less'

const RadioItem = Radio.RadioItem
const ListItem = List.Item

const data = [
    { value: 1, label: 'Doctor' },
    { value: 2, label: 'Bachelor' },
    { value: 3, label: 'Teacher' },
    { value: 4, label: 'Lucky' },
]

class RadioExample extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 2,
        }
    }

    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        const {
            active,
        } = this.state

        return (
            <div>
                <List renderHeader='Radio Item'>
                    {
                        data.map((item, index) => (
                            <RadioItem
                                key={item.value}
                                {
                                    ...getFieldProps(`radio.${index}`, {
                                        ...getRadioProps(item.value, 1),
                                    })
                                }
                            >
                                {item.label}
                            </RadioItem>
                        ))
                    }
                </List>
                <List renderHeader='Disabled'>
                    {
                        data.map((item, index) => (
                            <RadioItem
                                disabled
                                key={item.value}
                                {
                                    ...getFieldProps(`radio_disabled.${index}`, {
                                        ...getRadioProps(item.value, 1),
                                    })
                                }
                            >
                                {item.label}
                            </RadioItem>
                        ))
                    }
                </List>
                <List renderHeader='Button'>
                    <ListItem>
                        {
                            data.map(({ value, label }, index) => (
                                <div
                                    className={this.state.active === parseInt(`${index}`, 10) + 1 ?
                                    classNames(styles.radiocontainer, styles.active) :
                                    styles.radiocontainer}
                                    onClick={() => {
                                        this.setState({
                                            active: parseInt(`${index}`, 10) + 1,
                                        })
                                    }}
                                >
                                    <input
                                        type='radio'
                                        {
                                            ...getFieldProps(`button.${index}`, {
                                                ...getRadioProps(value, active),
                                            })
                                        }
                                    />
                                    <label>{`${label}`}</label>
                                </div>
                            ))
                        }
                    </ListItem>
                </List>
                <List renderHeader='获取值'>
                    <Button
                        onClick={() => {
                            console.log(this.props.form.getFieldsValue())
                        }}
                    >
                        打印单选值
                    </Button>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(RadioExample))
