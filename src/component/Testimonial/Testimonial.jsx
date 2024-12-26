import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import quotation from "../../assets/testimonialImage/Testimonial_quotation.png";
import testimonialImg1 from "../../assets/testimonialImage/Testimonial1.webp";
import testimonialImg2 from "../../assets/testimonialImage/Testimonial2.webp";
import testimonialImg3 from "../../assets/testimonialImage/Testimonial3.webp";
import testimonialImg4 from "../../assets/testimonialImage/Testimonial4.webp";
import testimonialImg5 from "../../assets/testimonialImage/Testimonial5.webp";
import testimonialImg6 from "../../assets/testimonialImage/Testimonial6.webp";

const Testimonial = () => {
  return (
    <section className="relative">
      <div className="container !py-[60px] !md:py-0 md:pt-[300px] lg:!pt-[410px] md:!pb-[200px] lg:!pb-[330px]">
        <Swiper
          speed={2500}
          parallax={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper w-[330px] md:w-[750px]"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="text-center">
              <div className="flex justify-center pb-14">
                <img className="w-20" src={quotation} alt="quotation" />
              </div>
              <p className="text-xl lg:text-2xl text-[#121212] w-full md:w-[700px] text-center mx-auto italic leading-normal text-wrap">
                When we talk about Alts, we do not mean a typical business
                partner, but rather a team that collaborates with us daily,
                always there for us when we encounter difficulties and celebrate
                achievements. We see in Alts our best ally for success!
              </p>
              <h3 className="pt-[50px] pb-2.5 text-2xl text-[#121212] uppercase font-medium">
                Maria D. Halk
              </h3>
              <h6 className="text-[#555555] text-sm font-light uppercase">
                Managing Director
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div className="flex justify-center pb-14">
                <img className="w-20" src={quotation} alt="quotation" />
              </div>
              <p className="text-xl lg:text-2xl text-[#121212] w-full md:w-[700px] text-center mx-auto italic leading-normal">
                When we talk about Alts, we do not mean a typical business
                partner, but rather a team that collaborates with us daily,
                always there for us when we encounter difficulties and celebrate
                achievements. We see in Alts our best ally for success!
              </p>
              <h3 className="pt-[50px] pb-2.5 text-2xl text-[#121212] uppercase font-medium">
                Maria D. Halk
              </h3>
              <h6 className="text-[#555555] text-sm font-light uppercase">
                Managing Director
              </h6>
            </div>
          </SwiperSlide>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="custom-next text-[#121212] text-xl border border-[#121212] p-3 rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
              <HiArrowLeft />
            </button>
            <button className="custom-prev text-[#121212] text-xl border border-[#121212] p-3 rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
              <HiArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
      <div>
          <img className="absolute top-16 left-16 lg:top-32 lg:left-96 hidden md:block" src={testimonialImg1} alt="Testimonial Image" />

          <img className="absolute top-32 lg:top-44 right-28 lg:right-96 hidden md:block" src={testimonialImg2} alt="Testimonial Image" />

          <img className="absolute bottom-20 left-14 lg:top-[500px] lg:left-14 hidden md:block z-10" src={testimonialImg3} alt="Testimonial Image" />

          <img className="absolute bottom-16 right-0 lg:top-[530px] lg:right-14 hidden md:block w-[150px] h-[280px] lg:w-[245px] lg:h-[278px]" src={testimonialImg4} alt="Testimonial Image" />

          <img className="absolute bottom-40 left-0 lg:bottom-[90px] lg:left-44 hidden md:block md:w-[150px] md:h-[400px] lg:h-[430px] lg:w-[330px]" src={testimonialImg5} alt="Testimonial Image" />

          <img className="absolute bottom-20 right-16 lg:bottom-[310px] lg:right-64 hidden md:block" src={testimonialImg6} alt="Testimonial Image" />
      </div>
    </section>
  );
};

export default Testimonial;
