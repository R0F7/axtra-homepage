import { MdArrowOutward } from "react-icons/md";
import HomeCommon from "../HomeCommon/HomeCommon";
import blogImg from '../../assets/recentBlog image.webp';
import blogImg1 from '../../assets/recentBlog image 1.webp';

const RecentBlog = () => {
  const blogContent = {
    sub_heading: "Recent Blog",
    title: "Read Updated <br/> Journal",
    description:
      "Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.",
  };

  return (
    <section className="container pb-[140px]">
      <HomeCommon {...blogContent}></HomeCommon>

      <div className="flex justify-between gap-5">
        <div className="w-1/2 flex items-end">
          <div className="h-[500px] w-[690px] -z-10">
            <img className="h-full w-full" src={blogImg} alt="Blog Image" />
          </div>
          <div className="p-10 -ml-[50px] z-10 bg-white">
            <h6 className="text-[#555555] text-[15px] mb-2.5">UI Design . 02 May 2019</h6>
            <h4 className="text-[#121212] text-[26px] pb-[50px] mb-2.5 border-b border-[#121212] font-medium leading-tight">How to bring fold to your startup company with Axtra</h4>
            {/* <hr className="pb-"/> */}
            <button className="flex items-center gap-1 text-[#555555]">
              <span className="">Read More</span>
              <i>
                <MdArrowOutward />
              </i>
            </button>
          </div>
        </div>

        <div className="w-1/2 flex items-end">
          <div className="h-[500px] w-[690px] -z-10">
            <img className="h-full w-full" src={blogImg1} alt="Blog Image" />
          </div>
          <div className="p-10 -ml-[50px] z-10 bg-white">
            <h6 className="text-[#555555] text-[15px] mb-2.5">UI Design . 02 May 2019</h6>
            <h4 className="text-[#121212] text-[26px] pb-[50px] mb-2.5 border-b border-[#121212] font-medium leading-tight">How to manage a talented and successful design team</h4>
            {/* <hr className="pb-"/> */}
            <button className="flex items-center gap-1 text-[#555555]">
              <span className="">Read More</span>
              <i>
                <MdArrowOutward />
              </i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
