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
    <div className="bg-background-3 bg-cover bg-no-repeat h-screen flex place-items-center w-full overflow-hidden lg:items-start">
      <div className="crew-container w-[100%]  mt-[12rem] lg:mt-[10rem]">
        <div className="sub-header font-con ml-[10rem] lg:ml-[3rem]">
          <p className="text-white tracking-[4.725px] text-[20px]">
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
                <div className="crew-content flex gap-[2rem] items-center mx-[10rem] lg:flex-col lg:mt-12">
                  <div className="txts max-w-[32rem] lg:text-center relative">
                    <h2 className="font-fair text-[24px] text-white opacity-50 uppercase">
                      {data.occupation}
                    </h2>
                    <h1 className="font-fair text-white text-[46px] uppercase">
                      {data.name}
                    </h1>
                    <p className="text-[#D0D6F9] font-body leading-[32px] mt-2">
                      {data.description}
                    </p>
                  </div>
                  <div className="image lg:mt-[3rem]">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-[80vh] w-[100%] object-contain "
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
