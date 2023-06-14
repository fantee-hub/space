const IndexPage = () => (
  <div className="bg-background-1 bg-cover bg-no-repeat min-h-screen flex place-items-center w-full lg:items-start lg:bg-background-tab-1">
    <div className="home-content  mt-[10rem] mx-[5rem] flex justify-between w-full lg:text-center lg:flex-col lg:mt-[15rem] sm:m-0">
      <div className="col ">
        <div className="header-txt text-[#D0D6F9] tracking-[4.72px]">
          <p>SO, YOU WANT TO TRAVEL TO</p>
        </div>
        <div className="main-header font-fair text-white text-[130px] sm:text-[80px]">
          <h1>SPACE</h1>
        </div>
        <div className="footer-txt text-[#D0D6F9] leading-[32px] max-w-[30rem] mx-auto sm:px-4 sm:text-[15px] ">
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="col self-end lg:self-center lg:mt-[10rem]">
        <div className="font-fair w-[200px] h-[200px] rounded-full bg-white flex items-center justify-center text-[20px] tracking-[2px] text-[#0B0D17]">
          <h1>EXPLORE</h1>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
