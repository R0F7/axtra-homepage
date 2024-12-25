import Hero from '../../component/Hero/Hero';
import Navbar from '../../component/Navbar/Navbar';
import WhoWeAre from '../../component/WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Hero></Hero>
          <WhoWeAre></WhoWeAre>
        </main>
      </>
    );
};

export default Home;