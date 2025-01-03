import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderImage1 from "../../assets/sliderImage/slider image 1.webp";
import sliderImage2 from "../../assets/sliderImage/slider image 2.webp";
import sliderImage3 from "../../assets/sliderImage/slider image 3.webp";
import sliderImage4 from "../../assets/sliderImage/slider image 4.webp";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Slider = () => {
  return (
    <section className="bg-[#121212] md:min-h-screen">
      <div className="container !py-[60px] md:py-20 lg:py-0 lg:!pt-[100px] lg:!pb-[150px]">
        <h4 className="text-lg text-white leading-tight pb-[45px] md:pb-[50px] lg:pb-4 uppercase">
          Featured <br /> Work
        </h4>

        <div className="relative group">
          <Swiper
            speed={1500}
            parallax={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {/* Slides */}
            {[sliderImage1, sliderImage2, sliderImage3, sliderImage4].map(
              (image, index) => (
                <SwiperSlide key={index}>
                  <div className="text-white flex justify-between">
                    <div className="relative flex-1">
                      <div
                        className="title flex gap-3 justify-end absolute left-0 top-3 md:top-0 md:left-6 lg:left-[400px] w-[100px] "
                        data-swiper-parallax="-300"
                      >
                        <span className="text-6xl">{index + 1} / </span>
                        <span className="text-2xl mt-1">4</span>
                      </div>
                      <div
                        className="subtitle text-6xl md:text-[100px] lg:text-[180px] font-medium leading-none absolute left-0 top-[150px] md:top-24 lg:top-16 z-10 uppercase flex flex-col"
                        data-swiper-parallax="-200"
                      >
                        <span>Benjon</span>
                        <span className="ml-16 md:ml-48">Website</span>
                        <span>2012</span>
                      </div>
                    </div>
                    <div
                      className="text -z-10 lg:pr-[110px] md:w-[417px] h-[499px] md:h-[508px] w-full lg:w-[600px] lg:h-[650px]"
                      data-swiper-parallax="-100"
                    >
                      <img className="w-full h-full" src={image} alt="Portfolio Image" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}

            {/* Custom Navigation Buttons */}
            <button className="custom-prev md:opacity-100 lg:opacity-0 group-hover:opacity-100 absolute top-1/2 left-2 z-50 text-white text-2xl border p-2.5 rounded-full transition-opacity duration-300">
              <HiArrowLeft />
            </button>
            <button className="custom-next md:opacity-100 lg:opacity-0 group-hover:opacity-100 absolute top-1/2 right-4 z-50 text-white text-2xl border p-2.5 rounded-full transition-opacity duration-300">
              <HiArrowRight />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
