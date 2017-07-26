import React from 'react'
import { connect } from 'dva'
import { browserHistory } from 'dva/router'

import {
    List,
    WingBlank,
} from 'antd-mobile'
import SITE from '../config/site'
import ROUTES, { ROUTES_TITLE } from '../config/routes'
import styles from './catalogue/catalogue.less'

const Item = List.Item

class Catalogue extends React.Component {
    redirect = (url) => {
        browserHistory.replace(url)
    }
    render() {
        return (
            <div className={styles.container}>
                <WingBlank>
                    <h3 className={styles.title}>
                        <img src={SITE.LOGO} alt={SITE.TITLE} className={styles.logo} />
                        <span>{SITE.TITLE}</span>
                    </h3>
                </WingBlank>
                <List>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.TIMER) }}>{ROUTES_TITLE[ROUTES.TIMER]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.LIST_VIEW) }}>{ROUTES_TITLE[ROUTES.LIST_VIEW]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.LOADING) }}>{ROUTES_TITLE[ROUTES.LOADING]}</Item>
                </List>
                <List renderHeader='表单'>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.INPUT_ITEM) }}>{ROUTES_TITLE[ROUTES.INPUT_ITEM]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.TEXTAREA_ITEM) }}>{ROUTES_TITLE[ROUTES.TEXTAREA_ITEM]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.RADIO) }}>{ROUTES_TITLE[ROUTES.RADIO]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.CHECKBOX) }}>{ROUTES_TITLE[ROUTES.CHECKBOX]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.SWITCH) }}>{ROUTES_TITLE[ROUTES.SWITCH]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.STEPPER) }}>{ROUTES_TITLE[ROUTES.STEPPER]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.PICKER) }}>{ROUTES_TITLE[ROUTES.PICKER]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.DATE_PICKER) }}>{ROUTES_TITLE[ROUTES.DATE_PICKER]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.SLIDER) }}>{ROUTES_TITLE[ROUTES.SLIDER]}</Item>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.VALIDATE) }}>{ROUTES_TITLE[ROUTES.VALIDATE]}</Item>
                </List>
                <List renderHeader='走马灯'>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.CAROUSEL) }}>{ROUTES_TITLE[ROUTES.CAROUSEL]}</Item>
                </List>
                <List renderHeader='弹出层'>
                    <Item arrow='horizontal' onClick={() => { this.redirect(ROUTES.POPUP) }}>{ROUTES_TITLE[ROUTES.POPUP]}</Item>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Catalogue)
