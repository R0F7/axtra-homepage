import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUS = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // const sections = gsap.utils.toArray(".content");

    gsap.to(containerRef.current, {
      x: () => `-${containerRef.current.scrollWidth - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={triggerRef} id="horizontal-wrapper" className="!hidden lg:!block">
      <div ref={containerRef} id="horizontal">
        <div className="content ">
          {/* <h2>Content 1</h2> */}
          <FirstPage></FirstPage>
        </div>
        <div className="content">
          {/* <h2>Content 2</h2> */}
          <SecondPage></SecondPage>
        </div>
        <div className="content">
          {/* <h2>Content 3</h2> */}
          <ThirdPage></ThirdPage>
        </div>
        <div className="content">
          <FourthPage></FourthPage>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import FirstPage from "./FirstPage";
// import SecondPage from "./SecondPage";
// import ThirdPage from "./ThirdPage";
// import FourthPage from "./FourthPage";

// gsap.registerPlugin(ScrollTrigger);

// const WhyChooseUS = () => {
//   const containerRef = useRef(null);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       if (window.innerWidth >= 1024) {
//         gsap.to(containerRef.current, {
//           x: () => `-${containerRef.current.scrollWidth - window.innerWidth}px`,
//           ease: "none",
//           scrollTrigger: {
//             trigger: triggerRef.current,
//             pin: true,
//             scrub: 1,
//             start: "top top",
//             end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
//             anticipatePin: 1,
//           },
//         });
//       }
//     }, containerRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={triggerRef} id="horizontal-wrapper">
//       <div ref={containerRef} id="horizontal">
//         <div className="content lg:!block !hidden">
//           <FirstPage />
//         </div>
//         <div className="content">
//           <SecondPage />
//         </div>
//         <div className="content">
//           <ThirdPage />
//         </div>
//         <div className="content lg:!block !hidden">
//           <FourthPage />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUS;
