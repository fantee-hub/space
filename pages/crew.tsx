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
    <div className="bg-background-3 bg-cover bg-no-repeat min-h-screen flex place-items-center w-full">
      <div className="crew-container w-[100%]">
        <div className="sub-header font-con ml-[10rem]">
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
                <div className="crew-content flex justify-center items-center ">
                  <div className="txts max-w-[20rem]">
                    <h2>{data.occupation}</h2>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                  </div>
                  <div className="image mt-[8rem]">
                    <img src={data.image} alt={data.name} />
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
