import React from 'react'
import { connect } from 'dva'

import {
    List,
    Carousel,
} from 'antd-mobile'

import styles from './carousel/carousel.less'

import Logo from '../assets/logo.png'

const data = [
    { link: 'http://www.baidu.com', img: Logo },
    { link: 'http://www.baidu.com', img: Logo },
]

const textdata = ['沉思十五年中事', '才也纵横，泪也纵横', '双负箫心与剑名']

class CarouselExample extends React.Component {
    render() {
        return (
            <div>

                <List renderHeader='普通图片轮播'>
                    <Carousel
                        autoplay
                        infinite
                        speed={500}
                        autoplayInterval={1500}
                        className={styles.carousel}
                    >
                        {
                            data.map(({ link, img }, index) => (
                                <a href={link} key={index}>
                                    <img src={img} alt='' />
                                </a>
                            ))
                        }
                    </Carousel>
                </List>

                <List renderHeader='竖向文字轮播'>
                    <Carousel
                        autoplay
                        infinite
                        vertical
                        speed={500}
                        dots={false}
                        autoplayInterval={1500}
                        className={styles.textcarousel}
                    >
                        {
                            textdata.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))
                        }
                    </Carousel>
                </List>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(CarouselExample)
