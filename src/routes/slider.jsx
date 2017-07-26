import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    Slider,
    WingBlank,
    WhiteSpace,
    createTooltip,
} from 'antd-mobile'

const SliderWithToolTip = createTooltip(Slider)

class StepperExample extends React.Component {
    render() {
        const {
            form: {
                getFieldProps,
            },
        } = this.props

        return (
            <div>
                <WingBlank size='lg'>
                    <span className='am-list-header' style={{ paddingLeft: 16 }}>基本</span>
                    <Slider
                        min={0}
                        max={100}
                        {
                            ...getFieldProps('basic', {
                                initialValue: 60,
                            })
                        }
                    />
                </WingBlank>
                <WhiteSpace size='lg' />
                <WingBlank size='lg'>
                    <span className='am-list-header' style={{ paddingLeft: 16 }}>Slider with Tooltip</span>
                    <SliderWithToolTip
                        min={0}
                        max={100}
                        {
                            ...getFieldProps('withTooltip', {
                                initialValue: 60,
                            })
                        }
                    />
                </WingBlank>
                <WhiteSpace size='lg' />
                <WingBlank size='lg'>
                    <span className='am-list-header' style={{ paddingLeft: 16 }}>Disabled</span>
                    <Slider
                        disabled
                        min={0}
                        max={100}
                        {
                            ...getFieldProps('disabled', {
                                initialValue: 60,
                            })
                        }
                    />
                </WingBlank>
            </div>
        )
    }
}

export default createForm()(connect((state) => {
    return state
})(StepperExample))
