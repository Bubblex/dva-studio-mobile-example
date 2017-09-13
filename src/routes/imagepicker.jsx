import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    ImagePicker,
} from 'antd-mobile'

class ImagePickerExample extends React.Component {

    onChange = (files, type, index) => {
        console.log(files, type, index)
        console.log(this.props.form.getFieldsValue())
    }

    render() {
        const {
            form: {
                getFieldProps,
                getFieldDecorator,
            },
        } = this.props

        return (
            <div>
                <List renderHeader='基本'>
                    {
                        getFieldDecorator('name')(<ImagePicker
                            onChange={this.onChange}
                        />)
                    }
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(ImagePickerExample))
