import "react-responsive-carousel/lib/styles/carousel.min.css";
import FirstSlide from "./FirstSlide";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const CarouselHome = () => {
    return (
        <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            navigation
            pagination={{
                "dynamicBullets": true,
                "clickable": true
            }}
            style={{
                marginBottom: '40px'
            }}
        >
            <SwiperSlide
                key={`slide-1`}
                tag="li"
                style={{
                    height: '690px'
                }}
            >
                <FirstSlide />
            </SwiperSlide>
            <SwiperSlide
                key={`slide-1`}
                tag="li"
                style={{
                    height: '690px'
                }}
            >
                <FirstSlide />
            </SwiperSlide>
        </Swiper>
    );
}

export default CarouselHome;