import React, { useEffect, useState } from "react";
import { sampleUserData } from "../utils/sample-data";

function Destination() {
  const [toggleTab, setToggleTab] = useState(0);
  const [data, setData] = useState([]);

  const updateToggle = (id: number) => {
    setToggleTab(id);
  };
  console.log(toggleTab, sampleUserData[toggleTab]);
  const fetchTabData = () => {
    setData(sampleUserData);
  };

  useEffect(() => {
    fetchTabData();
  }, []);
  return (
    <div className="bg-background-2 bg-cover bg-no-repeat h-screen flex place-items-center w-full overflow-hidden">
      <div className="contents-container  mt-[10rem]  w-full ">
        <div className="sub-header font-con ml-[10rem]">
          <p className="text-white tracking-[4.725px] text-[20px]">
            <span className="text-white opacity-25">01</span> PICK YOUR
            DESTINATION
          </p>
        </div>

        <div className="tab-panel flex justify-center gap-[10rem] my-[3rem] max-w-[80rem] mx-auto">
          <div className="image-panel self-end">
            {data && data.length && (
              <div>
                <img
                  src={data[toggleTab].image}
                  alt={data[toggleTab].name}
                  className="w-[300px] h-[300px] object-contain"
                />
              </div>
            )}
          </div>
          <div className="content-container max-w-[25rem] ">
            <div className="tab-container ">
              <ul className="flex text-[#D0D6F9] relative ">
                <li
                  className={`tabs ${
                    toggleTab === 0 ? "active" : ""
                  } pr-[1.5rem] cursor-pointer`}
                  onClick={() => updateToggle(0)}
                >
                  MOON
                </li>
                <li
                  className={` tabs ${
                    toggleTab === 1 ? "active" : ""
                  } pr-[1.5rem] cursor-pointer`}
                  onClick={() => updateToggle(1)}
                >
                  MARS
                </li>
                <li
                  className={` tabs ${
                    toggleTab === 2 ? "active" : ""
                  } pr-[1.5rem] cursor-pointer`}
                  onClick={() => updateToggle(2)}
                >
                  EUROPA
                </li>
                <li
                  className={`tabs  ${
                    toggleTab === 3 ? "active" : ""
                  }  cursor-pointer`}
                  onClick={() => updateToggle(3)}
                >
                  TITAN
                </li>
              </ul>
            </div>

            <div className="tab-content">
              {data && data.length && (
                <>
                  <div className="title uppercase font-fair text-white text-[80px] mt-2">
                    <h1>{data[toggleTab].name}</h1>
                  </div>
                  <div className="details font-body text-[#D0D6F9]">
                    <p>{data[toggleTab].description}</p>
                  </div>
                  <div className="w-full bg-white opacity-25 h-px mt-[2.2rem]"></div>
                  <div className="distance-container flex gap-[3rem] mt-[1rem]">
                    <div className="avg-distance">
                      <div className="header text-[#D0D6F9] text-[12px] tracking-[2.3625px]">
                        <p>AVG. DISTANCE</p>
                      </div>
                      <div className="txt text-white uppercase text-[20px]">
                        <p>{data[toggleTab].distance}</p>
                      </div>
                    </div>
                    <div className="avg-time">
                      <div className="header text-[#D0D6F9] text-[12px] tracking-[2.3625px]">
                        <p>EST. TRAVEL TIME</p>
                      </div>
                      <div className="txt text-white uppercase text-[20px]">
                        <p>{data[toggleTab].time}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
