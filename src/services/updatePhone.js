import request from '../utils/request'
import { query } from '../utils/library'
import API from '../config/api'

export async function fetchVerifyMessage(params) {
    return request(API.VERIFY_MESSAGE, {
        body: query(params),
    })
}

export async function fetchMenberBind(params) {
    return request(API.MEMBER_BIND, {
        body: query(params),
    })
}
