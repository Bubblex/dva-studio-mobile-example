import { fetchUserInfo } from '../services/user'

export default {
    namespace: 'user',
    state: {
        userInfo: [],
        userInfoPaginate: {},
    },
    reducers: {
        changeUserInfo(state, { userInfo, userInfoPaginate }) {
            return {
                ...state,
                userInfo,
                userInfoPaginate,
            }
        },
    },
    effects: {
        *fetchUserInfo({ payload }, { call, put }) {
            const {
                response: {
                    status,
                    data,
                },
            } = yield call(fetchUserInfo, payload)

            if (status === 1) {
                yield put({
                    type: 'changeUserInfo',
                    userInfo: data.user,
                    userInfoPaginate: data.paginate,
                })
            }
        },
    },
    subscriptions: {},
}
