import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    ImagePicker,
} from 'antd-mobile'

class ImagePickerExample extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imagePreviewUrl: '',
        }
    }
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

    handleUploadImage = (e) => {
        e.preventDefault()

        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result,
            })
        }
        reader.readAsDataURL(file)
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
                <List renderHeader='input上传base64图片'>
                    <input
                        type='file'
                        style={{ margin: '40px' }}
                        onChange={(e) => { this.handleUploadImage(e) }}
                        accept='image/jpg,image/jpeg,image/png,image/gif'
                    />
                    <div style={{ padding: '40px' }}>
                        预览上传图片:
                        <img alt='' src={this.state.imagePreviewUrl} />
                    </div>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(ImagePickerExample))
