import { companyLogos } from "./constants/companyLogos";
import { describeContant } from "./constants/describeContant";
import useWindowSize from "../../hook/useWindowSize";
import SwiperDescribe from "./SwiperDescribe";
import { MainButton } from "../../ui/Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Describe = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <>
      <div
        className="bg-gradient-to-b from-[#F9F0E5B2] to-transparent
        mt-[92px]
        py-[45px] px-[20px] 
        lg:py-[77px] lg:px-[104px] 
      "
      >
        <div className="flex flex-col items-center justify-center text-[#868787] font-medium">
          <div className="flex flex-col items-center mt-[30px] mb-4">
            as seen in
          </div>

          <div className="h-full w-full">
            {!isDesktop ? (
              <Swiper
                style={{
                  "--swiper-pagination-color": "#676869",
                }}
                slidesPerView={3}
                grabCursor={true}
                centeredSlides={true}
                pagination={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
              >
                {companyLogos.map((companyLogo) => (
                  <SwiperSlide key={companyLogo.keyName}>
                    <img
                      className="w-full h-[40px] object-contain"
                      src={companyLogo.image}
                      alt={`company logo ${companyLogo.keyName}`}
                    />
                  </SwiperSlide>
                ))}

                <div className="h-[50px] swiper-pagination-progressbar-opposite" />
              </Swiper>
            ) : (
              <div className="flex items-center justify-between ">
                {companyLogos.map((companyLogo) => (
                  <div
                    key={companyLogo.keyName}
                    className="w-[140px]"
                  >
                    <img
                      src={companyLogo.image}
                      alt={`company logo ${companyLogo.keyName}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="flex justify-between
        lg:px-[143px] lg:py-[100px] lg:flex-row
        px-[32px] py-[42px] flex-col
      "
      >
        <div
          className=" flex flex-col justify-center items-center
            lg:mr-[50px]
          "
        >
          <h2
            className=" text-[#01005B] font-sofiaRegular 
              text-4xl text-center mb-[74px]
              lg:text-xl lg:mb-[25px] lg:text-left lg:mb-[25px]
            "
          >
            Loungewear you can be proud of.
          </h2>

          {!isDesktop && (
            <div className="relative w-[28rem] h-[30rem] mb-[61px]">
              <SwiperDescribe />
            </div>
          )}

          {describeContant.map((value) => (
            <div
              key={value.title}
              className="
                w-full h-full
                lg:text-left lg:flex-row lg:items-start 
                flex justify-center text-center flex-col  items-center 
              "
            >
              <div
                className="
                  flex items-center justify-center 
                  lg:mb-[0]
                    min-w-[2.6rem] h-[2.6rem]
                    lg:mr-[20px]
                "
              >
                <img
                  className="
                    object-contain
                    w-[26px] h-[26px] 
                    lg:w-[20px] lg:h-[20px]
                  "
                  src={value.icon}
                  alt={`${value.alt} icon`}
                />

                <div
                  className="bg-[#F9F0E5] rounded-full absolute z-[-1]
                    w-[2.6rem] h-[2.6rem]
                  "
                ></div>
              </div>

              <div
                className="flex flex-col
              "
              >
                <h3 className="text-[#01005B] font-sofiaRegular text-xl mb-[14px]">
                  {value.title}
                </h3>

                <p className="mb-[17px] px-[45px] lg:px-[0px]">
                  {value.description}
                </p>
              </div>

              {!isDesktop && (
                <div className="w-full my-[30px] border-b border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {isDesktop ? (
          <div className="relative w-[28rem] h-[30rem]">
            <SwiperDescribe />
          </div>
        ) : (
          <div className="mb-[11px] flex flex-col justify-center">
            <MainButton />

            <div className="flex justify-center items-center mb-[74px]">
              <img
                className="mr-3"
                src="icons/stars.svg"
                alt="stars"
              />

              <p className="text-[#676869]">Over 500+ 5 Star Reviews Online</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Describe;
