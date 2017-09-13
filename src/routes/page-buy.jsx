import React from 'react'
import { connect } from 'dva'

import {
    List,
    Popup,
    TabBar,
    Carousel,
    WhiteSpace,
} from 'antd-mobile'

import Logo from '../assets/logo.png'
import BuyExample from './component-buy'
import styles from './page-buy/page-buy.less'

const ListItem = List.Item
const TabBarItem = TabBar.Item

const exampledata = {
    lava: 69,
    img: Logo,
    lowest_price: 11.90,
    highest_price: 198.00,
    title: '德国ABK赫拉尔格瓶装啤酒',
    bannerdata: [
        { link: 'http://www.baidu.com', image: Logo },
        { link: 'http://www.baidu.com', image: Logo },
    ],
}

class PAGEBUYEXAMPLE extends React.Component {

    showBottomToTopActionSheet = () => {
        Popup.show(<BuyExample />, { animationType: 'slide-up' })
    }

    render() {
        const {
            img,
            lava,
            title,
            bannerdata,
            lowest_price: lowestPrice,
        } = exampledata
        return (
            <div>
                <List>
                    <Carousel
                        autoplay
                        infinite
                        speed={500}
                        autoplayInterval={1500}
                        style={{
                            background: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        {
                            bannerdata.map(({ link, image }, index) => (
                                <a href={link} key={index}>
                                    <img src={image} alt='logo' />
                                </a>
                            ))
                        }
                    </Carousel>
                    <ListItem>
                        <p>{title}</p>
                        <span className={styles.title}>
                            ￥{lowestPrice}
                        </span>
                    </ListItem>
                    <ListItem
                        extra={'剩余：' + lava}
                    >
                        <p className={styles.freight}>运费：免运费</p>
                    </ListItem>
                </List>
                <WhiteSpace size='sm' />
                <List>
                    <ListItem
                        arrow='horizontal'
                        onClick={this.showBottomToTopActionSheet}
                    >
                        <p className={styles.choosesize}>选择：规格</p>
                    </ListItem>
                </List>
                <WhiteSpace size='sm' />
                <List>
                    <ListItem>
                        <p className={styles.choosesize}>店铺认证</p>
                    </ListItem>
                </List>
                <WhiteSpace size='sm' />
                <List>
                    <ListItem>
                        <p className={styles.choosesize}>产品详情</p>
                    </ListItem>
                </List>
                <div>
                    <p>图文详情</p>
                </div>
                <div className={styles.tabbarcontainer}>
                    <TabBar>
                        <TabBarItem
                            title='首页'
                            key='1'
                            icon={
                                <div
                                    style={{
                                        width: '0.44rem',
                                        height: '0.44rem',
                                        background: `url(${img})`,
                                        backgroundSize: '0.44rem',
                                    }}
                                />
                            }
                        />
                        <TabBarItem
                            title='购物车'
                            key='2'
                            icon={
                                <div
                                    style={{
                                        width: '0.44rem',
                                        height: '0.44rem',
                                        background: `url(${img})`,
                                        backgroundSize: '0.44rem',
                                    }}
                                />
                            }
                        />
                    </TabBar>
                </div>
                <div className={styles.righttabbarcontainer}>
                    <TabBar
                        tintColor='#fff'
                        unselectedTintColor='#fff'
                    >
                        <TabBarItem
                            key='1'
                            icon={<div />}
                            title='加入购物车'
                            onPress={this.showBottomToTopActionSheet}
                        />
                        <TabBarItem
                            key='2'
                            icon={<div />}
                            title='立即购买'
                            onPress={this.showBottomToTopActionSheet}
                        />
                    </TabBar>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(PAGEBUYEXAMPLE)
