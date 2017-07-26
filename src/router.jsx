import React from 'react'
import { Router, Route } from 'dva/router'

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

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path='/' component={Home} />
            <Route path='/catalogue' component={Catalogue} />
            <Route component={ExampleBasic}>
                <Route path='timer' component={Timer} />
                <Route path='list-view' component={ListView} />
                <Route path='loading' component={Loading} />

                <Route path='input-item' component={InputItemExample} />
                <Route path='textarea-item' component={TextareaItemExample} />
                <Route path='radio' component={RadioExample} />
                <Route path='checkbox' component={CheckboxExample} />
                <Route path='switch' component={SwitchExample} />
                <Route path='stepper' component={StepperExample} />
                <Route path='picker' component={PickerExample} />
                <Route path='date-picker' component={DatePickerExample} />
                <Route path='slider' component={SliderExample} />
                <Route path='validate' component={Validate} />
                <Route path='carousel' component={Carousel} />
                <Route path='popup' component={Popup} />
            </Route>
        </Router>
    )
}

export default RouterConfig
