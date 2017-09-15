import React from 'react'
import { Router, Route } from 'dva/router'

import ROUTES from './config/routes'

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path={ROUTES.HOME} component={require('../src/routes/home')} />
            <Route path={ROUTES.CATALOGUE} component={require('../src/routes/catalogue')} />
            <Route component={require('../src/routes/example-basic')}>
                <Route path={ROUTES.TIMER} component={require('../src/routes/timer')} />
                <Route path={ROUTES.LIST_VIEW} component={require('../src/routes/list-view')} />
                <Route path={ROUTES.BAIDU_MAP} component={require('../src/routes/baidumap')} />
                <Route path={ROUTES.QRCODE} component={require('../src/routes/qrcode')} />
                <Route path={ROUTES.CLIPBOARD} component={require('../src/routes/clipboard')} />

                <Route path={ROUTES.INPUT_ITEM} component={require('../src/routes/input-item')} />
                <Route path={ROUTES.TEXTAREA_ITEM} component={require('../src/routes/textarea-item')} />
                <Route path={ROUTES.RADIO} component={require('../src/routes/radio')} />
                <Route path={ROUTES.CHECKBOX} component={require('../src/routes/checkbox')} />
                <Route path={ROUTES.SWITCH} component={require('../src/routes/switch')} />
                <Route path={ROUTES.STEPPER} component={require('../src/routes/stepper')} />
                <Route path={ROUTES.PICKER} component={require('../src/routes/picker')} />
                <Route path={ROUTES.DATE_PICKER} component={require('../src/routes/date-picker')} />
                <Route path={ROUTES.SLIDER} component={require('../src/routes/slider')} />
                <Route path={ROUTES.VALIDATE} component={require('../src/routes/validate')} />
                <Route path={ROUTES.IMAGEPICKER} component={require('../src/routes/imagepicker')} />

                <Route path={ROUTES.CAROUSEL} component={require('../src/routes/carousel')} />
                <Route path={ROUTES.GRID} component={require('../src/routes/grid')} />
                <Route path={ROUTES.STEPS} component={require('../src/routes/steps')} />

                <Route path={ROUTES.POPUP} component={require('../src/routes/popup')} />
                <Route path={ROUTES.SWIPEACTION} component={require('../src/routes/swipeaction')} />
                <Route path={ROUTES.PROGRESS} component={require('../src/routes/progress')} />

                <Route path={ROUTES.TABBAR} component={require('../src/routes/tabbar')} />
                <Route path={ROUTES.TABS} component={require('../src/routes/tabs')} />

                <Route path={ROUTES.PAGE_BUY} component={require('../src/routes/page-buy')} />
                <Route path={ROUTES.PAGE_UPDATE_PHONE} component={require('../src/routes/page-update-phone')} />
            </Route>
        </Router>
    )
}

export default RouterConfig
