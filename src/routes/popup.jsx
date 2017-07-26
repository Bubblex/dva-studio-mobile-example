import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    List,
    Popup,
} from 'antd-mobile'

import BuyExample from './buy'

const ListItem = List.Item

class PopupExample extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 1,
        }
    }

    componentWillUnmount = () => {
        Popup.hide()
    }

    showBottomToTopActionSheet = () => {
        Popup.show(<BuyExample />, { animationType: 'slide-up' })
    }

    showTopToBottomActionSheet = () => {
        Popup.show(<List renderHeader='羔羊'>
            <ListItem><p>羔羊之皮，素丝五紽。退食自公，委蛇委蛇。</p></ListItem>
            <ListItem><p>羔羊之革，素丝五緎。委蛇委蛇，自公退食。</p></ListItem>
            <ListItem><p>羔羊之缝，素丝五总。委蛇委蛇，退食自公。</p></ListItem>
        </List>)
    }

    render() {
        return (
            <div>
                <List renderHeader='向下弹出层'>
                    <ListItem arrow='horizontal' onClick={this.showTopToBottomActionSheet}>查看：羔羊</ListItem>
                </List>
                <List renderHeader='向上弹出层'>
                    <ListItem arrow='horizontal' onClick={this.showBottomToTopActionSheet}>选择：规格</ListItem>
                </List>
            </div>
        )
    }
}


export default createForm()(connect((state) => {
    return state
})(PopupExample))
