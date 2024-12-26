import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import OurMarketing from "../../component/OurMarketing/OurMarketing";
import PricingOverview from "../../component/PricingOverview/PricingOverview";
import RecentBlog from "../../component/RecentBlog/RecentBlog";
import Slider from "../../component/Slider/Slider";
import Testimonial from "../../component/Testimonial/Testimonial";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";
import FirstPage from "../../component/WhyChooseUS/FirstPage";
import FourthPage from "../../component/WhyChooseUS/FourthPage";
import SecondPage from "../../component/WhyChooseUS/SecondPage";
import ThirdPage from "../../component/WhyChooseUS/ThirdPage";
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
        <div className="block lg:hidden">
          <FirstPage></FirstPage>
          <SecondPage></SecondPage>
          <ThirdPage></ThirdPage>
          <FourthPage></FourthPage>
        </div>
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
