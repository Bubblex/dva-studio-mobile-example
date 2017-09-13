import React from 'react'
import { connect } from 'dva'
import Clipboard from 'clipboard'

import {
    List,
    Button,
    InputItem,
} from 'antd-mobile'

class ClipboardExample extends React.Component {
    componentDidMount() {
        const buttonIdSelector = '#button'

        this.clipboard = new Clipboard(
            buttonIdSelector, {
                target: () => document.getElementById('input'),
            },
        )
    }

    render() {
        return (
            <div>
                <List renderHeader='复制文本'>
                    <InputItem
                        id='input'
                        type={'text'}
                        value='复制文本^_^'
                        readOnly
                    >
                        内容
                    </InputItem>
                    <Button id='button'>Copy!</Button>
                    <InputItem placeholder='粘贴复制内容'>
                        测试
                    </InputItem>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(ClipboardExample)
