import React from 'react'
import { connect } from 'dva'

import {
    Card,
    ListView,
    WingBlank,
    WhiteSpace,
} from 'antd-mobile'

let index = 0

class ListViews extends React.Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })

        // 当前所有元素的列表
        this.rData = []
        this.state = {
            dataSource: dataSource.cloneWithRows(this.rData),
            isLoading: true,
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'user/fetchUserInfo',
        })
    }

    componentWillReceiveProps(nextProps) {
        const userInfo = nextProps.user.userInfo
        const userInfoPaginate = nextProps.user.userInfoPaginate

        if (userInfo.length > 0 && userInfoPaginate.page !== this.props.user.userInfoPaginate.page) {
            this.rData = this.rData.concat(userInfo)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            })
        }
        else if (userInfo.length === 0 && this.rData.length === 0) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                hasMore: false,
            })
        }
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: 'user/changeUserInfo',
            userInfo: [],
            userInfoPaginate: {},
        })
    }

    onEndReached = () => {
        const {
            dispatch,
            user: {
                userInfoPaginate,
                userInfoPaginate: {
                    page,
                },
            },
        } = this.props

        if (this.state.isLoading && !this.state.hasMore) {
            return
        }

        if (!userInfoPaginate || !page) {
            return
        }

        this.setState({ isLoading: true })

        dispatch({
            type: 'user/fetchUserInfo',
            payload: {
                page: page + 1,
            },
        })
    }

    render() {
        const {
            user: {
                userInfo,
            },
        } = this.props

        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} />
        )

        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = userInfo.length - 1
            }

            return (
                <WingBlank
                    wrap='true'
                    key={rowID}
                    size='lg'
                >
                    <WhiteSpace size='lg' />
                    <Card>
                        <Card.Header
                            title={rowData.title}
                            thumb={rowData.image}
                            extra={<span>   {rowData._sequence}</span>}
                        />
                        <Card.Body>
                            <div>{rowData.content}</div>
                            <Card.Footer content={rowData.date} extra={<div>{rowData.phone}</div>} />
                        </Card.Body>
                    </Card>
                    <WhiteSpace size='lg' />
                </WingBlank>
            )
        }

        return (
            <div>
                <ListView
                    useBodyScroll
                    renderRow={row}
                    className='am-list'
                    scrollEventThrottle={15}
                    onEndReachedThreshold={100}
                    renderSeparator={separator}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    dataSource={this.state.dataSource}
                    renderHeader={() => <span>用户列表</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {!this.state.hasMore ? '没有更多了' : this.state.isLoading ? '加载中...' : '' }
                    </div>)}
                />
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(ListViews)
