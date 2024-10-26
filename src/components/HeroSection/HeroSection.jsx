import { describerSection } from "./constants/describerSection";
import useWindowSize from "@/hook/useWindowSize";
import { MainButton } from "@/ui/Button";
import SwiperHeroSection from "./SwiperHeroSection";

const HeroSection = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <div
      className="flex flex-col justify-center 
        px-[20px] py-[13px] mb-[86px]
        lg:px-[96px] lg:py-[33px] lg:mb-[120px]
        w-full
      "
    >
      <div
        className="mb-[60px]
        flex flex-col justify-center items-center 
        lg:items-start
      "
      >
        <img
          className="h-[35px]"
          src="/images/LOGO.svg"
          alt="Byteex logo"
        />
      </div>

      <div
        className="flex w-full items-center 
          justify-center
          lg:justify-between
        "
      >
        <div className=" w-full">
          <h2
            className="text-[#01005B] font-sofiaRegular 
            text-center text-3xl mb-[17px] 
            lg:text-xl lg:mb-[25px] lg:text-left"
          >
            Don't apologize for being comfortable.
          </h2>

          {!isDesktop && (
            <div className="w-full">
              <SwiperHeroSection />
            </div>
          )}

          <div className="flex items-center justify-center">
            <div>
              {describerSection.map((value) => (
                <div
                  key={value.alt}
                  className="flex items-center mb-[23px]"
                >
                  <div className="max-w-[31px] h-[31px] bg-[#F9F0E5] rounded-full p-2">
                    <img
                      className="w-full h-full"
                      src={value.icon}
                      alt={`${value.alt} icon`}
                    />
                  </div>

                  <p className="text-[#676869] ml-2">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          {isDesktop ? (
            <button className="relative flex items-center rounded px-[70px] py-[16px] bg-[#01005B]">
              <p className="text-white text-xl">Customize Your Outfit</p>

              <img
                className="absolute right-8 bottom-2"
                src="/icons/Arrow.svg"
                alt="arrow"
              />
            </button>
          ) : (
            <div className="flex justify-center items-center ">
              <MainButton />
            </div>
          )}
        </div>

        {isDesktop && (
          <>
            <div className="mx-5"></div>

            <div className="w-full">
              <SwiperHeroSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
