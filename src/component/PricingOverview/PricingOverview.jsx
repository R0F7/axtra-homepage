import { FaCheck } from "react-icons/fa6";
import AccordionX from "./AccordionX";
import { MdArrowOutward } from "react-icons/md";

const PricingOverview = () => {
  return (
    <section className="bg-[#F3ECEC] py-[70px] lg:py-[130px]">
      <div className="container flex flex-col lg:flex-row lg:gap-24">
        <div className="w-full lg:w-1/2">
          <h4 className="text-[#555555] text-lg uppercase">Pricing Table</h4>
          <h2 className="text-[#121212] text-[32px] lg:text-6xl pb-[60px] uppercase font-medium">
            Be kind to your <br />
            mind
          </h2>
          <div>
            <AccordionX></AccordionX>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-16">
          <div className="bg-[#121212] flex justify-between gap-8 py-10 px-[30px] rounded-md mb-5 relative">
            <div className="flex items-center">
              <i className="bg-[#FF9776] w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0">
                <FaCheck />
              </i>
            </div>

            <div>
              <button className="text-[#999999] text-xs mb-[15px] p-[5px] px-3 rounded-full border border-[#999999]">
                Yearly
              </button>
              <h3 className="text-[26px] mb-[5px] text-white">14 days free</h3>
              <p className="text-[#999999]">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
            <p className="text-white">
              <span className="text-4xl">$129</span>
              <span>.99</span>
            </p>

            <div className="absolute -top-4 right-6">
              <button className="bg-[#FF9776] text-white rounded-md text-xs py-1.5 px-3 uppercase font-medium">Best Value</button>
            </div>
          </div>
          <div className="bg-white flex justify-between gap-8 py-10 px-[30px] rounded-md mb-5 shadow">
            <div className="flex items-center">
              <i className="w-10 h-10 border-2 rounded-md flex items-center justify-center flex-shrink-0">
                <FaCheck />
              </i>
            </div>

            <div>
              <button className="text-[#262626] text-xs mb-[15px] p-[5px] px-3 rounded-full border uppercase">
                Monthly
              </button>
              <h3 className="text-[26px] mb-[5px] text-[#121212]">
                7 days free
              </h3>
              <p className="text-[#262626]">
                Subscription fee is $12.99 USD and automatically renews each
                year.
              </p>
            </div>
            <p className="">
              <span className="text-4xl">$12</span>
              <span>.99</span>
            </p>
          </div>
          <div className="mt-20">
            <button className="flex items-center justify-center gap-1 w-44 h-44 rounded-full border border-[#555555] text-[#555555]">
              <span className="text-left">
                Try It <br />
                Free Now
              </span>
              <i><MdArrowOutward /></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOverview;
