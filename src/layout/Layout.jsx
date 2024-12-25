import Hero from "../component/Hero/Hero";
import Navbar from "../component/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
};

export default Layout;
