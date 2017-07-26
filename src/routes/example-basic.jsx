import React from 'react'
import { connect } from 'dva'
import { browserHistory } from 'dva/router'

import { NavBar } from 'antd-mobile'

import ROUTES, { ROUTES_TITLE } from '../config/routes'

import styles from './example-basic/example-basic.less'

class ExampleBasic extends React.Component {
    back = () => {
        browserHistory.replace(ROUTES.CATALOGUE)
    }
    render() {
        const {
            children,
            location: {
                pathname,
            },
        } = this.props

        return (
            <div>
                <NavBar mode='light' leftContent='返回' onLeftClick={this.back}>
                    {ROUTES_TITLE[pathname]}
                </NavBar>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(ExampleBasic)
