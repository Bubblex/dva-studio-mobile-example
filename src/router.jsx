import React from 'react'
import { Router, Route } from 'dva/router'

import ROUTES from './config/routes'

import Home from './routes/home'
import Catalogue from './routes/catalogue'
import ExampleBasic from './routes/example-basic'
import Timer from './routes/timer'
import ListView from './routes/list-view'
import Loading from './routes/loading'
import InputItemExample from './routes/input-item'
import TextareaItemExample from './routes/textarea-item'
import RadioExample from './routes/radio'
import CheckboxExample from './routes/checkbox'
import SwitchExample from './routes/switch'
import StepperExample from './routes/stepper'
import PickerExample from './routes/picker'
import DatePickerExample from './routes/date-picker'
import SliderExample from './routes/slider'
import Validate from './routes/validate'
import Carousel from './routes/carousel'
import Popup from './routes/popup'
import GridExample from './routes/grid'
import TabbarExample from './routes/tabbar'
import PAGEBUYEXAMPLE from './routes/page-buy'
import SWIPEACTIONEXAMPLE from './routes/swipeaction'
import TabsExample from './routes/tabs'
import QrcodeExample from './routes/qrcode'
import ImagePickerExample from './routes/imagepicker'
import ProgressExample from './routes/progress'
import StepsExample from './routes/steps'

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.CATALOGUE} component={Catalogue} />
            <Route component={ExampleBasic}>
                <Route path={ROUTES.TIMER} component={Timer} />
                <Route path={ROUTES.LIST_VIEW} component={ListView} />
                <Route path={ROUTES.LOADING} component={Loading} />
                <Route path={ROUTES.QRCODE} component={QrcodeExample} />

                <Route path={ROUTES.INPUT_ITEM} component={InputItemExample} />
                <Route path={ROUTES.TEXTAREA_ITEM} component={TextareaItemExample} />
                <Route path={ROUTES.RADIO} component={RadioExample} />
                <Route path={ROUTES.CHECKBOX} component={CheckboxExample} />
                <Route path={ROUTES.SWITCH} component={SwitchExample} />
                <Route path={ROUTES.STEPPER} component={StepperExample} />
                <Route path={ROUTES.PICKER} component={PickerExample} />
                <Route path={ROUTES.DATE_PICKER} component={DatePickerExample} />
                <Route path={ROUTES.SLIDER} component={SliderExample} />
                <Route path={ROUTES.VALIDATE} component={Validate} />
                <Route path={ROUTES.IMAGEPICKER} component={ImagePickerExample} />

                <Route path={ROUTES.CAROUSEL} component={Carousel} />
                <Route path={ROUTES.GRID} component={GridExample} />
                <Route path={ROUTES.STEPS} component={StepsExample} />

                <Route path={ROUTES.POPUP} component={Popup} />
                <Route path={ROUTES.SWIPEACTION} component={SWIPEACTIONEXAMPLE} />
                <Route path={ROUTES.PROGRESS} component={ProgressExample} />

                <Route path={ROUTES.TABBAR} component={TabbarExample} />
                <Route path={ROUTES.TABS} component={TabsExample} />

                <Route path={ROUTES.PAGE_BUY} component={PAGEBUYEXAMPLE} />
            </Route>
        </Router>
    )
}

export default RouterConfig
