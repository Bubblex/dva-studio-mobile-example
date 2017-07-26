import React from 'react'
import { connect } from 'dva'

class ListView extends React.Component {
    render() {
        return (
            <div>
                List View Example
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(ListView)
