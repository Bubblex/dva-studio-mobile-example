import React from 'react'
import { connect } from 'dva'
import QRCode from 'qrcode.react'
import { createForm } from 'rc-form'

import {
    List,
    TextareaItem,
} from 'antd-mobile'

const style = {
    marginTop: '50px',
    textAlign: 'center',
    width: '50%',
    float: 'left',
}

class QrcodeExample extends React.Component {
    render() {
        const {
            form,
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='生成二维码'>
                    <TextareaItem
                        title='文本'
                        placeholder='输入文本生成二维码（非汉语）'
                        {
                            ...getFieldProps('qrcode', {
                                initialValue: 'http://www.baidu.com',
                            })
                        }
                    />
                </List>
                <div style={{ ...style }}>
                    <QRCode
                        level='L'
                        size={300}
                        fgColor='#333'
                        bgColor='#f5f5f9'
                        value={form.getFieldsValue().qrcode}
                    />
                </div>
                <div style={{ ...style }}>
                    <QRCode
                        level='M'
                        size={300}
                        fgColor='#333'
                        bgColor='#f5f5f9'
                        value={form.getFieldsValue().qrcode}
                    />
                </div>
                <div style={{ ...style }}>
                    <QRCode
                        level='Q'
                        size={300}
                        fgColor='#333'
                        bgColor='#f5f5f9'
                        value={form.getFieldsValue().qrcode}
                    />
                </div>
                <div style={{ ...style }}>
                    <QRCode
                        level='H'
                        size={300}
                        fgColor='#333'
                        bgColor='#f5f5f9'
                        value={form.getFieldsValue().qrcode}
                    />
                </div>
            </div>
        )
    }
}


export default createForm()(connect((state) => {
    return state
})(QrcodeExample))
