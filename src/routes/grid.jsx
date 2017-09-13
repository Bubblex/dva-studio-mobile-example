import React from 'react'
import { connect } from 'dva'
import { createForm } from 'rc-form'

import {
    Grid,
    List,
} from 'antd-mobile'

import LOGO from '../assets/logo.png'

const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: LOGO,
    text: `name${i}`,
}))

class GridExample extends React.Component {

    render() {
        return (
            <div>
                <List renderHeader='基本'>
                    <Grid
                        data={data}
                        columnNum={4}
                    />
                </List>
                <List renderHeader='无边框'>
                    <Grid
                        data={data}
                        columnNum={4}
                        hasLine={false}
                    />
                </List>
                <List renderHeader='走马灯'>
                    <Grid
                        data={data}
                        carouselMaxRow={2}
                        columnNum={3}
                        isCarousel
                        hasLine={false}
                    />
                </List>
                <List renderHeader='自定义内容'>
                    <Grid
                        data={data}
                        renderItem={dataItem => (
                            <div
                                style={{
                                    paddingTop: '30px',
                                }}
                            >
                                <img
                                    src={dataItem.icon}
                                    alt='logo'
                                    style={{
                                        width: '80px',
                                    }}
                                />
                                <p>{dataItem.text}</p>
                            </div>
                        )}
                        onClick={(parame) => {
                            console.log(parame)
                        }}
                    />
                </List>
            </div>
        )
    }
}


export default createForm()(connect((state) => {
    return state
})(GridExample))
