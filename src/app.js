import dva from 'dva'
import { browserHistory } from 'dva/router'

import './app.less'

const app = dva({
    history: browserHistory,
})

app.use({})

app.model(require('./models/user'))
app.model(require('./models/imagepicker'))
app.model(require('./models/updatePhone'))

app.router(require('./router'))

app.start('#root')
