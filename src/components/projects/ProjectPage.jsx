import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Bgimg from "../../components/imgs/bgimg.png";
import Bathroomimg from "../../components/imgs/bathroom.png";
import Bathroomimg2 from "../../components/imgs/bathroom2.jpg";

const ProjectPage = () => {
  return (
    <div>
      <header className="h-[350px] mt-[65px] m-auto">
        <div
          style={{
            backgroundImage: `url(${Bgimg})`,
          }}
          className="w-[100%] h-[350px] flex items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-[70px] text-white font-normal font-serif mt-[60px]">
            Our Project
          </h1>
        </div>
      </header>
      <section className="border border-[#CDA274] w-[50%] h-[70px] flex justify-evenly mt-[40px] m-auto rounded-[18px] gap-5 text-[18px] font-semibold">
        <button>Bathroom</button>
        <button>Bed Room</button>
        <button>Kitchan</button>
        <button>Living Area</button>
      </section>
      <section className="w-[80%] h-[770px] flex justify-between mt-[40px] m-auto">
        <div className="w-[48%] h-[100%]">
          <img
            src={Bathroomimg}
            alt="img"
            className="w-[100%] h-[85%] bg-cover bg-center"
          />
          <div className="flex justify-between mt-[40px]">
            <div>
              <h2 className="text-[25px] text-[#292F36] font-normal">
                Minimal Bedroom
              </h2>
              <p className="text-[20px] text-[#4D5053] font-normal">
                Decor / Architecture
              </p>
            </div>
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#F4F0EC]">
              <button>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[48%] h-[100%]">
          <img
            src={Bathroomimg2}
            alt="img"
            className="w-[100%] h-[85%] bg-cover bg-center"
          />
          <div className="flex justify-between mt-[40px]">
            <div>
              <h2 className="text-[25px] text-[#292F36] font-normal">
                Minimal Bedroom
              </h2>
              <p className="text-[20px] text-[#4D5053] font-normal">
                Decor / Architecture
              </p>
            </div>
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#F4F0EC]">
              <button>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
