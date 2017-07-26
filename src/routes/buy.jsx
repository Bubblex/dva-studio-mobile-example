import React from 'react'
import classNames from 'classnames'
import { createForm } from 'rc-form'

import {
    List,
    Icon,
    Button,
    Stepper,
    Popup,
} from 'antd-mobile'

import styles from './buy/buy.less'
import radiostyles from './radio/radio.less'
import LOGO from '../assets/logo.png'

import {
    getRadioProps,
} from '../utils/library'

const ListItem = List.Item

const data = [
    { value: 1, label: 'Doctor' },
    { value: 2, label: 'Bachelor' },
    { value: 3, label: 'Teacher' },
    { value: 4, label: 'Lucky' },
]

class BuyExample extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 1,
            type: 1,
        }
    }

    onClose = () => {
        Popup.hide()
    }

    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props
        return (
            <div>
                <List className={styles.listcontainer}>
                    <ListItem className={styles.titlecontainer}>
                        <img src={LOGO} alt='logo' />
                        <p>德国ABK赫拉尔格瓶装啤酒酒</p>
                        <p>￥<span>11.90</span>-<span>198.00</span></p>
                        <span
                            style={{ position: 'absolute', right: 3, top: -5 }}
                            onClick={this.onClose}
                            className={styles.closebtn}
                        >
                            <Icon type='cross' />
                        </span>
                    </ListItem>
                    <ListItem>
                        <p>价格：</p>
                        {
                            data.map(({ value, label }, index) => (
                                <div
                                    className={this.state.active === parseInt(`${index}`) + 1 ?
                                    classNames(radiostyles.radiocontainer, radiostyles.active) :
                                    radiostyles.radiocontainer}
                                    onClick={() => {
                                        this.setState({
                                            active: parseInt(`${index}`) + 1,
                                        })
                                    }}
                                >
                                    <input
                                        type='radio'
                                        {
                                            ...getFieldProps(`button.${index}`, {
                                                ...getRadioProps(value, 1),
                                            })
                                        }
                                    />
                                    <label>{`${label}`}</label>
                                </div>
                            ))
                        }
                    </ListItem>
                    <ListItem>
                        <p>规格：</p>
                        {
                            data.map(({ value, label }, index) => (
                                <div
                                    className={this.state.type === parseInt(`${index}`) + 1 ?
                                    classNames(radiostyles.radiocontainer, radiostyles.active) :
                                    radiostyles.radiocontainer}
                                    onClick={() => {
                                        this.setState({
                                            type: parseInt(`${index}`) + 1,
                                        })
                                    }}
                                >
                                    <input
                                        type='radio'
                                        {
                                            ...getFieldProps(`type.${index}`, {
                                                ...getRadioProps(value, 1),
                                            })
                                        }
                                    />
                                    <label>{`${label}`}</label>
                                </div>
                            ))
                        }
                    </ListItem>
                    <ListItem
                        extra={
                            <Stepper
                                min={0}
                                max={10}
                                showNumber
                                style={{ width: '100%' }}
                                {
                                    ...getFieldProps('number', {
                                        initialValue: 1,
                                    })
                                }
                            />
                        }
                    >
                        <p>购买数量：</p>
                        <p className={styles.restnum}>剩余<span>69</span>件</p>
                    </ListItem>
                </List>
                <Button
                    type='primary'
                    onClick={() => {
                        console.log(this.props.form.getFieldsValue())
                    }}
                >
                    下一步
                </Button>
            </div>
        )
    }
}


export default createForm()(BuyExample)
