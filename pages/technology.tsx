import React, { useState, useEffect } from "react";
import { techData } from "../utils/sample-data";

function Technology() {
  const [data, setData] = useState([]);
  const [toggleTab, setToggleTab] = useState(0);

  const updateToggle = (id: number) => {
    setToggleTab(id);
  };

  const fetchTabData = () => {
    setData(techData);
  };
  console.log(data);

  useEffect(() => {
    fetchTabData();
  }, []);
  return (
    <div className="bg-background-4 bg-cover bg-no-repeat h-screen flex place-items-center w-full overflow-hidden lg:items-center">
      <div className="contents-container  mt-[10rem]  w-full ">
        <div className="sub-header font-con ml-[10rem] lg:ml-[3rem] lg:mb-[3rem]">
          <p className="text-white tracking-[4.725px] text-[20px]">
            <span className="text-white opacity-25">03</span> TECHNOLOGY
          </p>
        </div>
        <div className="technology-content flex justify-between items-center ml-[10rem] lg:flex-col-reverse lg:ml-0">
          <div className="flex gap-6  content lg:flex-col">
            <div className="tab-panel lg:flex lg:justify-center lg:items-center gap-4 lg:my-5">
              <div
                className={` ${
                  toggleTab === 0 ? "tab-active" : ""
                } font-fair w-[60px] h-[60px] rounded-full  flex items-center justify-center text-[20px]  border-solid border border-[#ffffff] tracking-[2px] text-[#ffffff] mb-5 cursor-pointer lg:m-0
                `}
                onClick={() => updateToggle(0)}
              >
                1
              </div>
              <div
                className={` ${
                  toggleTab === 1 ? "tab-active" : ""
                } font-fair w-[60px] h-[60px] rounded-full bg-transparent flex items-center justify-center text-[20px] tracking-[2px] text-[#ffffff] border-solid border border-[#ffffff] mb-5 cursor-pointer lg:m-0`}
                onClick={() => updateToggle(1)}
              >
                2
              </div>
              <div
                className={`font-fair w-[60px] h-[60px] rounded-full bg-transparent flex items-center justify-center text-[20px] tracking-[2px] text-[#ffffff] border-solid border border-[#ffffff] cursor-pointer lg:m-0 ${
                  toggleTab === 2 ? "tab-active" : "not-active"
                }`}
                onClick={() => updateToggle(2)}
              >
                3
              </div>
            </div>
            <div className="main-content max-w-[30rem]">
              {data && data.length && (
                <>
                  <h2 className="font-fair text-[16px] text-white opacity-50 uppercase">
                    {data[toggleTab].header}
                  </h2>
                  <h1 className="font-fair text-white text-[46px] uppercase">
                    {data[toggleTab].title}
                  </h1>
                  <p className="text-[#D0D6F9] font-body leading-[32px] mt-2">
                    {data[toggleTab].description}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="images lg:hidden">
            {data && data.length && (
              <>
                <img
                  src={data[toggleTab].image}
                  alt={data[toggleTab].title}
                  className="w-[400px] h-[400px] object-contain"
                />
              </>
            )}
          </div>
          <div className="images lgg:hidden">
            {data && data.length && (
              <>
                <img
                  src={data[toggleTab].imageMobile}
                  alt={data[toggleTab].title}
                  className="w-[400px] h-[400px] object-contain lg:w-[100vw]"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
