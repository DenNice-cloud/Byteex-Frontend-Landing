import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { companyLogos } from "./constants/companyLogos";
import { photos } from "./constants/photos";
import { describeContant } from "./constants/describeContant";

const Describe = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState(0);

  const handleClickSwitch = (index) => {
    swiperRef.slideToLoop(index);
    setActiveSlide(index);
  };

  return (
    <>
      <div className="py-[77px] px-[104px] bg-gradient-to-b from-[#F9F0E5B2] to-transparent">
        <div className="flex flex-col justify-center text-[#868787] font-medium">
          <div className="flex flex-col items-center mb-4">as seen in</div>

          <div className="flex items-center justify-between">
            {companyLogos.map((companyLogo, index) => (
              <div
                key={index}
                className="w-[140px]"
              >
                <img src={companyLogo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[143px] py-[100px] flex justify-between">
        <div className="mr-[180px]">
          <h2 className="mb-[74px] text-[#01005B] font-sofiaRegular text-3xl ">
            Loungewear you can be proud of.
          </h2>

          {describeContant.map((value) => (
            <div
              key={value.title}
              className="flex"
            >
              <div className="w-[30px] h-[30px] bg-[#F9F0E5] rounded-full p-2 mr-[13px]">
                <img
                  src={value.icon}
                  alt={`${value.alt} icon`}
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#01005B] font-sofiaRegular text-xl mb-[14px]">
                  {value.title}
                </h3>

                <p className="mb-[17px]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[500px] h-[600px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#676869",
              "--swiper-pagination-color": "#676869",
            }}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="w-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            onSwiper={(swiper) => setSwiperRef(swiper)}
          >
            {photos.map((photo, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  className="h-[600px] object-cover"
                  src={photo}
                  alt="photo"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-3 left-0 w-[500px] z-[1]">
            <Swiper
              slidesPerView={photos.length}
              modules={[Navigation]}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              style={{ width: "250px" }}
            >
              {photos.map((photo, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handleClickSwitch(index)}
                >
                  <img
                    className={`w-[32px] h-[32px] object-cover ${
                      activeSlide === index ? "border-4 border-white" : ""
                    }`}
                    src={photo}
                    alt="mini-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-[13px] text-[#676869]">
            <p>White Robe</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Describe;
