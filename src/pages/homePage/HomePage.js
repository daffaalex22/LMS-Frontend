import Container from "@mui/material/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import './HomePage.css'

// import 'swip'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

SwiperCore.use([Navigation, Pagination])

const HomePage = () => {

    const slides = []

    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide
                key={`slide-${i}`}
                tag="li"
            >
                <img
                    src={`https://picsum.photos/id/${i + 1}/1540/700`}
                    alt={`slide-${i}`}
                />
            </SwiperSlide>
        )
    }

    return (
        <>
            {/* <Carousel
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src="https://wallpaperaccess.com/full/156340.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/1a/d9/9c/1ad99c6ededbced34f20f8bdc0811742.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/6b/20/46/6b2046aade8adf2d14f649586e4bfb40.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}

            <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation
                pagination={{
                    "dynamicBullets": true,
                    "clickable": true
                }}
            >
                {slides}
            </Swiper>

            <Container>
                HomePage
            </Container>
        </>
    );
}

export default HomePage;