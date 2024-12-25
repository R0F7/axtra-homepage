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
      <div className="container pt-[410px] pb-[330px]">
        <Swiper
          speed={2500}
          parallax={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper w-[750px]"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="text-center">
              <div className="flex justify-center pb-14">
                <img className="w-20" src={quotation} alt="quotation" />
              </div>
              <p className="text-2xl text-[#121212] w-[700px] text-center mx-auto italic leading-normal text-wrap">
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
              <p className="text-2xl text-[#121212] w-[700px] text-center mx-auto italic leading-normal">
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
          <img className="absolute top-32 left-96" src={testimonialImg1} alt="Testimonial Image" />
          <img className="absolute top-44 right-96" src={testimonialImg2} alt="Testimonial Image" />
          <img className="absolute top-[500px] left-14" src={testimonialImg3} alt="Testimonial Image" />
          <img className="absolute top-[530px] right-14" src={testimonialImg4} alt="Testimonial Image" />
          <img className="absolute bottom-[90px] left-44" src={testimonialImg5} alt="Testimonial Image" />
          <img className="absolute bottom-[310px] right-64" src={testimonialImg6} alt="Testimonial Image" />
      </div>
    </section>
  );
};

export default Testimonial;
