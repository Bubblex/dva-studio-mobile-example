const ROUTES = {
    // 首页
    HOME: '/',

    // 目录
    CATALOGUE: '/catalogue',

    // 定时器
    TIMER: '/timer',

    // 长列表
    LIST_VIEW: '/list-view',

    // 百度地图
    BAIDU_MAP: '/baidu-map',

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

    // 宫格
    GRID: '/grid',

    // 弹出层
    POPUP: '/popup',

    // 标签栏
    TABBAR: '/tabbar',

    // 购买页
    PAGE_BUY: '/page-buy',

    // 滑动操作
    SWIPEACTION: '/swipeaction',

    // 标签页
    TABS: '/tabs',

    // 二维码生成
    QRCODE: '/qrcode',

    // 上传图片
    IMAGEPICKER: '/imagepicker',

    // 进度条
    PROGRESS: '/progress',

    // 步骤条
    STEPS: '/steps',

    // 复制文本
    CLIPBOARD: '/clipboard',

    // 重新绑定手机号
    PAGE_UPDATE_PHONE: '/page-update-phone',
}
const ROUTES_TITLE = {}

ROUTES_TITLE[ROUTES.TIMER] = '定时器'
ROUTES_TITLE[ROUTES.LIST_VIEW] = '下拉加载'
ROUTES_TITLE[ROUTES.BAIDU_MAP] = '百度地图'
ROUTES_TITLE[ROUTES.QRCODE] = '二维码生成'
ROUTES_TITLE[ROUTES.CLIPBOARD] = '复制文本'

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
ROUTES_TITLE[ROUTES.IMAGEPICKER] = '上传图片'

ROUTES_TITLE[ROUTES.CAROUSEL] = '走马灯'
ROUTES_TITLE[ROUTES.GRID] = '宫格'
ROUTES_TITLE[ROUTES.STEPS] = '步骤条'

ROUTES_TITLE[ROUTES.POPUP] = '弹出层'
ROUTES_TITLE[ROUTES.SWIPEACTION] = '滑动操作'
ROUTES_TITLE[ROUTES.PROGRESS] = '进度条'

ROUTES_TITLE[ROUTES.TABBAR] = '标签栏'
ROUTES_TITLE[ROUTES.TABS] = '标签页'

ROUTES_TITLE[ROUTES.PAGE_BUY] = '购买页'
ROUTES_TITLE[ROUTES.PAGE_UPDATE_PHONE] = '重新绑定手机号'

export default ROUTES
export { ROUTES_TITLE }
