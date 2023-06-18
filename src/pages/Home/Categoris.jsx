import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitile/SectionTitle";

const Categoris = () => {
  return (
    <section>
      <SectionTitle
        heading={"Online Order"}
        subHeading={"From 10:00 AM to 11:00 PM"}
      ></SectionTitle>
      <div className="my-20">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />{" "}
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              dessert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />{" "}
            <h3 className="text-4xl uppercase -mt-12 mb-6 text-center font-semibold text-white">
              pizzas
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Categoris;
