import { Toast } from 'antd-mobile'
import {
    fetchMenberBind,
    fetchVerifyMessage,
} from '../services/updatePhone'
import { PHONE_CODE_SECOND } from '../config/data-item'

export default {
    namespace: 'updatePhone',
    state: {
        // 是否获取过验证码
        isGetCode: 0,

        // 是否正在获取验证码 0：待获取 1：正在获取
        isGetingCode: 0,

        // 倒计时时长
        second: PHONE_CODE_SECOND,

        // 重新绑定手机当前步骤
        bindPhoneStepCurrent: 0,
    },
    reducers: {
        // 是否获取过验证码
        saveIsGetCode(state, { isGetCode }) {
            return {
                ...state,
                isGetCode,
            }
        },
        // 是否正在获取验证码
        saveIsGetingCode(state, { isGetingCode }) {
            return {
                ...state,
                isGetingCode,
            }
        },
        // 倒计时
        changeSecond(state, { second }) {
            return {
                ...state,
                second,
            }
        },
        // 修改重新绑定手机当前步骤
        changeBindPhoneStepCurrent(state, { bindPhoneStepCurrent }) {
            return {
                ...state,
                bindPhoneStepCurrent,
            }
        },
    },
    effects: {
        *fetchVerifyMessage({ payload }, { call, put }) {
            const {
                response: {
                    status,
                    message,
                },
            } = yield call(fetchVerifyMessage, payload)

            if (status === 1) {
                yield put({
                    type: 'saveIsGetCode',
                    isGetCode: 1,
                })
                yield put({
                    type: 'saveIsGetingCode',
                    isGetingCode: 1,
                })
            }
            else if (status === 0) {
                Toast.fail(message, 1)
            }
        },

        *fetchMenberBind({ payload }, { call, put }) {
            const {
                response: {
                    status,
                },
            } = yield call(fetchMenberBind, payload)

            if (status === 1) {
                yield put({
                    type: 'changeBindPhoneStepCurrent',
                    bindPhoneStepCurrent: 1,
                })
                yield put({
                    type: 'saveIsGetCode',
                    isGetCode: 0,
                })
            }
            else if (status === 200) {
                yield put({
                    type: 'changeBindPhoneStepCurrent',
                    bindPhoneStepCurrent: 2,
                })
            }
        },
    },
    subscriptions: {},
}
