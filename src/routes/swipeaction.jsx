import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    SwipeAction,
    Checkbox,
} from 'antd-mobile'

import {
    getCheckboxProps,
} from '../utils/library'

const ListItem = List.Item
const CheckboxItem = Checkbox.CheckboxItem

const data = [
    { value: 0, label: '商品一' },
    { value: 1, label: '商品二' },
    { value: 2, label: '商品三' },
]

class SwipeactionExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props
        return (
            <div>
                <List renderHeader='左滑操作'>
                    {
                        data.map(({ label, value }, index) => (
                            <SwipeAction
                                style={{ backgroundColor: 'gray' }}
                                autoClose
                                right={[
                                    {
                                        text: '取消',
                                        onPress: () => console.log('取消'),
                                        style: { backgroundColor: '#ddd', color: 'white' },
                                    },
                                    {
                                        text: '删除',
                                        onPress: () => console.log('删除'),
                                        style: { backgroundColor: '#F4333C', color: 'white' },
                                    },
                                ]}
                                onOpen={() => console.log('global open')}
                                onClose={() => console.log('global close')}
                            >
                                <CheckboxItem
                                    key={value}
                                    {
                                        ...getFieldProps(`list.${index}`, {
                                            ...getCheckboxProps(value),
                                        })
                                    }
                                >
                                    {label}
                                </CheckboxItem>
                            </SwipeAction>
                        ))
                    }
                </List>
                <List renderHeader='右滑操作'>
                    <SwipeAction
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        left={[
                            {
                                text: 'Reply',
                                onPress: () => console.log('reply'),
                                style: { backgroundColor: '#108ee9', color: 'white' },
                            },
                            {
                                text: 'Cancel',
                                onPress: () => console.log('cancel'),
                                style: { backgroundColor: '#ddd', color: 'white' },
                            },
                        ]}
                        onOpen={() => console.log('global open')}
                        onClose={() => console.log('global close')}
                    >
                        <ListItem>
                            Have left buttons
                        </ListItem>
                    </SwipeAction>
                </List>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(SwipeactionExample))
