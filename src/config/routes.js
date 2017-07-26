const ROUTES = {
    // 首页
    HOME: '/',

    // 目录
    CATALOGUE: '/catalogue',

    // 定时器
    TIMER: '/timer',

    // 长列表
    LIST_VIEW: '/list-view',

    // 加载中
    LOADING: '/loading',

    // 文本输入框
    INPUT_ITEM: '/input-item',

    // 多行输入
    TEXTAREA_ITEM: '/textarea-item',

    // 单选框
    RADIO: '/radio',

    // 多选框
    CHECKBOX: '/checkbox',

    // 滑动开关
    SWITCH: '/switch',

    // 步进器
    STEPPER: '/stepper',

    // 选择器
    PICKER: '/picker',

    // 日期选择器
    DATE_PICKER: '/date-picker',

    // 滑动输入条
    SLIDER: '/slider',

    // 表单验证
    VALIDATE: '/validate',

    // 走马灯
    CAROUSEL: '/carousel',

    // 弹出层
    POPUP: '/popup',
}
const ROUTES_TITLE = {}

ROUTES_TITLE[ROUTES.TIMER] = '定时器'
ROUTES_TITLE[ROUTES.LIST_VIEW] = '下拉加载'
ROUTES_TITLE[ROUTES.LOADING] = '加载中'
ROUTES_TITLE[ROUTES.INPUT_ITEM] = '文本输入'
ROUTES_TITLE[ROUTES.TEXTAREA_ITEM] = '多行输入'
ROUTES_TITLE[ROUTES.RADIO] = '单选框'
ROUTES_TITLE[ROUTES.CHECKBOX] = '多选框'
ROUTES_TITLE[ROUTES.SWITCH] = '滑动开关'
ROUTES_TITLE[ROUTES.STEPPER] = '步进器'
ROUTES_TITLE[ROUTES.PICKER] = '选择器'
ROUTES_TITLE[ROUTES.DATE_PICKER] = '日期选择器'
ROUTES_TITLE[ROUTES.SLIDER] = '滑动输入条'
ROUTES_TITLE[ROUTES.VALIDATE] = '表单验证'
ROUTES_TITLE[ROUTES.CAROUSEL] = '走马灯'
ROUTES_TITLE[ROUTES.POPUP] = '弹出层'

export default ROUTES
export { ROUTES_TITLE }
