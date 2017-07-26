import React from 'react'
import { connect } from 'dva'

class Loading extends React.Component {
    render() {
        return (
            <div>
                Loading Example
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Loading)
