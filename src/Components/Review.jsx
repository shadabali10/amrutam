import React from "react";
import star from "../assets/star.svg";

const Review = () => {
  return (
    <div className="flex justify-center items-center min-w-screen flex-col bg-[rgb(255,247,226)] pb-10">
      <h1 className="mb-20 w-3/4 text-center text-3xl mt-5 max-md:w-full max-md:text-3xl max-md:mt-5">
        STORIES FROM OUR VALUED CUSTOMERS!
      </h1>
      <div className="flex justify-center items-center flex-wrap max-md:w-full">
        
        {/* card 1 */}
        <div className="flex border-[1px] border-[#00df9a] w-[388px] h-full rounded-xl flex-col mr-5 max-md:mb-10 max-md:w-11/12 max-md:mr-0">
          <div className="w-[386px] h-[54px] text-left  mb-5 bg-[rgb(237,230,255)] flex items-center rounded-t-xl max-md:w-full max-md:mr-0">
            <h4 className="ml-5 ">Consulted for Skin</h4>
          </div>
          <div className="w-[331px] h-[60px] flex justify-between items-center  ml-5 mb-5 max-md:w-3/4">
            <div className="w-[60px] h-[60px] rounded-full bg-black "></div>
            <div className="flex flex-col">
              <p>Sophie Moore</p>
              <p>Chennai</p>
            </div>
            <>17/02/24</>
          </div>
          <div className="w-[140px] h-[24px] flex  ml-5  mb-5 max-md:w-3/4">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <h3 className="ml-5 mb-5 max-md:w-3/4">“One of a kind service”</h3>
          <h5 className=" ml-5 mb-5 max-md:w-3/4">
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </h5>
        </div>

        {/* card 2 */}
        <div className="flex border-[1px] border-[#00df9a] w-[388px] h-full rounded-xl flex-col mr-5 max-md:mb-10 max-md:w-11/12 max-md:mr-0">
          <div className="w-[386px] h-[54px] text-left  mb-5 bg-[rgb(237,230,255)] flex items-center rounded-t-xl max-md:w-full max-md:mr-0">
            <h4 className="ml-5 ">Consulted for Skin</h4>
          </div>
          <div className="w-[331px] h-[60px] flex justify-between items-center  ml-5 mb-5 max-md:w-3/4">
            <div className="w-[60px] h-[60px] rounded-full bg-black "></div>
            <div className="flex flex-col">
              <p>Sophie Moore</p>
              <p>Chennai</p>
            </div>
            <>17/02/24</>
          </div>
          <div className="w-[140px] h-[24px] flex  ml-5  mb-5 max-md:w-3/4">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <h3 className="ml-5 mb-5 max-md:w-3/4">“One of a kind service”</h3>
          <h5 className=" ml-5 mb-5 max-md:w-3/4">
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </h5>
        </div>

        {/* card 3 */}
        <div className="flex border-[1px] border-[#00df9a] w-[388px] h-full rounded-xl flex-col mr-5 max-md:mb-10 max-md:w-11/12 max-md:mr-0">
          <div className="w-[386px] h-[54px] text-left  mb-5 bg-[rgb(237,230,255)] flex items-center rounded-t-xl max-md:w-full max-md:mr-0">
            <h4 className="ml-5 ">Consulted for Skin</h4>
          </div>
          <div className="w-[331px] h-[60px] flex justify-between items-center  ml-5 mb-5 max-md:w-3/4">
            <div className="w-[60px] h-[60px] rounded-full bg-black "></div>
            <div className="flex flex-col">
              <p>Sophie Moore</p>
              <p>Chennai</p>
            </div>
            <>17/02/24</>
          </div>
          <div className="w-[140px] h-[24px] flex  ml-5  mb-5 max-md:w-3/4">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <h3 className="ml-5 mb-5 max-md:w-3/4">“One of a kind service”</h3>
          <h5 className=" ml-5 mb-5 max-md:w-3/4">
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </h5>
        </div>


      </div>
    </div>
  );
};

export default Review;
