import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import OurMarketing from "../../component/OurMarketing/OurMarketing";
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
      </main>
    </>
  );
};

export default Home;
