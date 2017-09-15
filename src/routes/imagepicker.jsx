import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    ImagePicker,
} from 'antd-mobile'

class ImagePickerExample extends React.Component {
    onChange = (files, type, index) => {
        const { dispatch } = this.props

        if (type === 'add') {
            dispatch({
                type: 'imagepicker/saveUploadImage',
                image: files[files.length - 1].url,
            })
        }
        else if (type === 'remove') {
            dispatch({
                type: 'imagepicker/removeUploadImage',
                index,
            })
        }
    }

    render() {
        const {
            imagepicker: {
                images,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='ImagePicker上传图片'>
                    <ImagePicker
                        files={images}
                        selectable={images.length < 3}
                        onChange={this.onChange}
                    />
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(ImagePickerExample))
