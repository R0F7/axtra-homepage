import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import OurMarketing from "../../component/OurMarketing/OurMarketing";
import Slider from "../../component/Slider/Slider";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";

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
      </main>
    </>
  );
};

export default Home;
