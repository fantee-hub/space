import { useEffect, useState } from "react";
import { crewData } from "../utils/sample-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, A11y } from "swiper";

function Crew() {
  const [data, setData] = useState([]);
  const fetchCrewData = () => {
    setData(crewData);
  };

  useEffect(() => {
    fetchCrewData();
  }, []);

  console.log(data);
  return (
    <div className="bg-background-3 bg-cover bg-no-repeat h-screen flex place-items-center w-full lg:items-start  sm:overflow-auto">
      <div className="crew-container w-[100%]  mt-[12rem] lg:mt-[10rem]">
        <div className="sub-header font-con ml-[10rem] mdd:ml-[3rem] sm:text-center sm:m-0">
          <p className="text-white tracking-[4.725px] text-[20px] sm:text-[16px]">
            <span className="text-white opacity-25">02</span> MEET YOUR CREW
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data &&
            data.length &&
            data.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="crew-content flex gap-[2rem] items-center mx-[10rem] mdd:flex-col lg:mt-12 sm:m-0 sm:flex-col-reverse sm:mt-[5rem] lgg:flex-row">
                  <div className="txts max-w-[32rem] lg:text-center relative sm:w-full sm:px-4">
                    <h2 className="font-fair text-[24px] text-white opacity-50 uppercase sm:text-[16px] sm:mt-[6rem]">
                      {data.occupation}
                    </h2>
                    <h1 className="font-fair text-white text-[46px] uppercase sm:text-[24px]">
                      {data.name}
                    </h1>
                    <p className="text-[#D0D6F9] font-body leading-[32px] mt-2 sm:pb-[50px]">
                      {data.description}
                    </p>
                  </div>
                  <div className="image mdd:mt-[3rem] sm:m-0 sm:border-b-[1px] sm:border-[#383B4B]">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-[80vh] w-[100%] object-contain sm:w-[427px] sm:h-[223px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Crew;
