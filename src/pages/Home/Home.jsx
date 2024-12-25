import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import OurMarketing from "../../component/OurMarketing/OurMarketing";
import Slider from "../../component/Slider/Slider";
import Testimonial from "../../component/Testimonial/Testimonial";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";
import WhyChooseUS from "../../component/WhyChooseUS/WhyChooseUS";

const Home = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <WhoWeAre></WhoWeAre>
        <OurMarketing></OurMarketing>
        <Slider></Slider>
        <Testimonial></Testimonial>
        <WhyChooseUS></WhyChooseUS>
      </main>
    </>
  );
};

export default Home;
