import React from 'react'
import { connect } from 'dva'

import {
    List,
    Button,
} from 'antd-mobile'

class BaiduMap extends React.Component {
    render() {
        return (
            <div>
                <List renderHeader='百度地图'>
                    <Button
                        onClick={() => {
                            window.location.href = 'http://api.map.baidu.com/marker?location=34.2467721367,117.1506962883&title=徐州云龙区&content=徐州云空区云龙湖名胜风景区&output=html&src=江肖'
                        }}
                    >打开地图</Button>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(BaiduMap)
