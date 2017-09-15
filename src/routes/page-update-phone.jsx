import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'
import classNames from 'classnames'
import {
    Steps,
    Toast,
    Button,
} from 'antd-mobile'
import styles from './page-update-phone/page-update-phone.less'
import { PHONE_CODE_SECOND } from '../config/data-item'

const Step = Steps.Step
class UpdatePhone extends React.Component {
    componentWillUnmount() {
        const {
            dispatch,
        } = this.props

        dispatch({
            type: 'updatePhone/changeBindPhoneStepCurrent',
            bindPhoneStepCurrent: 0,
        })
    }

    handleGetCode = (step) => {
        const {
            dispatch,
            form,
        } = this.props

        if (step === 1) {
            dispatch({
                type: 'updatePhone/fetchVerifyMessage',
                payload: {
                    phone: 14751376919,
                    type: 1,
                },
            })
        }
        else if (step === 2) {
            const newphone = form.getFieldsValue().phone

            if (!newphone) {
                Toast.fail('请输入手机号', 1)
                return
            }
            else if (!(/^1[0-9]{10}$/.test(newphone))) {
                Toast.fail('手机格式不正确', 1)
                return
            }
            dispatch({
                type: 'updatePhone/fetchVerifyMessage',
                payload: {
                    phone: newphone,
                    type: 2,
                },
            })
        }

        this.timer = setInterval(() => {
            const {
                updatePhone: {
                    second,
                },
            } = this.props

            dispatch({
                type: 'updatePhone/changeSecond',
                second: second - 1,
            })
            if (second <= 1) {
                dispatch({
                    type: 'updatePhone/changeSecond',
                    second: PHONE_CODE_SECOND,
                })
                clearInterval(this.timer)
                dispatch({
                    type: 'updatePhone/saveIsGetingCode',
                    isGetingCode: 0,
                })
            }
        }, 1000)
    }

    handleCheckOldPhone = (type) => {
        const {
            form,
            updatePhone: {
                isGetCode,
            },
            dispatch,
        } = this.props

        if (type === 1) {
            const code = form.getFieldsValue().code

            if (!isGetCode) {
                Toast.fail('请获取验证码', 1)
                return
            }
            else if (!code) {
                Toast.fail('请输入验证码', 1)
                return
            }

            dispatch({
                type: 'updatePhone/fetchMenberBind',
                payload: {
                    type: 1,
                    phone: '14751376919',
                    code,
                },
            })
        }
        else if (type === 2) {
            const newphone = form.getFieldsValue().phone
            const code = form.getFieldsValue().newcode

            if (!newphone) {
                Toast.fail('请输入手机号', 1)
                return
            }
            else if (!(/^1[0-9]{10}$/.test(newphone))) {
                Toast.fail('手机格式不正确', 1)
                return
            }
            else if (!isGetCode) {
                Toast.fail('请获取验证码', 1)
                return
            }
            else if (!code) {
                Toast.fail('请输入验证码', 1)
                return
            }

            dispatch({
                type: 'updatePhone/fetchMenberBind',
                payload: {
                    type: 2,
                    phone: newphone,
                    code,
                },
            })
        }

        // 清空计时器
        dispatch({
            type: 'updatePhone/changeSecond',
            second: PHONE_CODE_SECOND,
        })
        clearInterval(this.timer)
        dispatch({
            type: 'updatePhone/saveIsGetingCode',
            isGetingCode: 0,
        })
    }

    render() {
        const {
            form: {
                getFieldProps,
            },
            updatePhone: {
                isGetingCode,
                second,
                bindPhoneStepCurrent,
            },
        } = this.props
        return (
            <div className={styles.containerUpdate}>
                <Steps direction='horizontal' current={bindPhoneStepCurrent}>
                    <Step title='验证旧手机' />
                    <Step title='验证新手机' />
                    <Step title='完成' />
                </Steps>
                {
                    bindPhoneStepCurrent === 0
                    &&
                    <div>
                        <p className={styles.smallTittle}>已绑定手机号：14751376919</p>
                        <div className={classNames(styles.inputContainer, styles.shortInput)}>
                            <input
                                placeholder='请输入验证码'
                                {...getFieldProps('code')}
                            />
                            {
                            isGetingCode === 0
                                &&
                                <a href='javascript:' onClick={() => { this.handleGetCode(1) }}>获取验证码</a>
                            }
                            {
                                isGetingCode === 1
                                &&
                                <p className={styles.disabled}>{second}s后重新获取</p>
                            }
                        </div>
                        <Button
                            type='primary'
                            className={styles.confirm}
                            onClick={() => { this.handleCheckOldPhone(1) }}
                        >确定</Button>
                    </div>
                }
                {
                    bindPhoneStepCurrent === 1
                    &&
                    <div>
                        <p className={styles.smallTittle}>验证新手机</p>
                        <div className={styles.inputContainer}>
                            <input
                                placeholder='请输入手机号'
                                {...getFieldProps('phone')}
                            />
                        </div>
                        <div className={classNames(styles.inputContainer, styles.shortInput)}>
                            <input
                                placeholder='请输入验证码'
                                {...getFieldProps('newcode')}
                            />
                            {
                                isGetingCode === 0
                                &&
                                <a href='javascript:' onClick={() => { this.handleGetCode(2) }}>获取验证码</a>
                            }
                            {
                                isGetingCode === 1
                                &&
                                <p className={styles.disabled}>{second}s后重新获取</p>
                            }
                        </div>
                        <Button
                            type='primary'
                            className={styles.confirm}
                            onClick={() => { this.handleCheckOldPhone(2) }}
                        >确定</Button>
                    </div>
                }
                {
                    bindPhoneStepCurrent === 2
                    &&
                    <div className={styles.finish}>
                        <p>绑定信息</p>
                    </div>
                }
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(UpdatePhone))
