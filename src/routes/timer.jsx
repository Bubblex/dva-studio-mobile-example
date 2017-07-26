import React from 'react'
import { connect } from 'dva'

class Timer extends React.Component {
    render() {
        return (
            <div>
                Timer Example
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Timer)
