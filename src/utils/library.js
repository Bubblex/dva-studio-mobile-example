import { Toast } from 'antd-mobile'

/**
 * 获取 InputItem 组件的错误验证相关属性
 * @param {Object} errors getFieldError 的返回值
 * @return {Object} 属性
 */
export function getInputItemError(errors) {
    return {
        error: errors,
        onErrorClick: () => {
            if (errors) {
                Toast.fail(errors.join(','))
            }
        },
    }
}

/**
 * 获取 RadioItem 组件在 rc-form 中的获取值属性
 * @param {*} value 单选框的值
 * @param {*} initialValue 默认值
 */
export function getRadioProps(value, initialValue) {
    return {
        exclusive: true,
        getValueFromEvent(e) {
            return e.target.checked ? value : undefined
        },
        getValueProps(valueProps) {
            return {
                checked: valueProps !== undefined ? valueProps === value : initialValue === value,
            }
        },
    }
}

export function getCheckboxProps(value, initialValue = []) {
    return {
        getValueFromEvent(e) {
            return e.target.checked ? value : undefined
        },
        getValueProps(valueProps) {
            let checked = false

            for (const item of initialValue) {
                if (item === value) {
                    checked = true
                    break
                }
            }

            return {
                checked: valueProps !== undefined ? valueProps === value : checked,
            }
        },
    }
}

/**
 * 过滤数组中的 undefined 值
 * @param {Array} list 要过滤的数组
 */
export function filterUndefinedForArray(list = []) {
    const result = []

    for (const item of list) {
        if (item !== undefined) {
            result.push(item)
        }
    }

    return result
}
