import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import OurMarketing from "../../component/OurMarketing/OurMarketing";
import PricingOverview from "../../component/PricingOverview/PricingOverview";
import RecentBlog from "../../component/RecentBlog/RecentBlog";
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
        <PricingOverview></PricingOverview>
        <RecentBlog></RecentBlog>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
