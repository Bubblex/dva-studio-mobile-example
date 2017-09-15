import request from '../utils/request'
import { query } from '../utils/library'
import API from '../config/api'

export async function fetchUserInfo(params) {
    return request(API.FETCH_USER_INFO, {
        body: query(params),
    })
}
