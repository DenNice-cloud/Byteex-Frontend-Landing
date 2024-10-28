import useWindowSize from "@/Hook/useWindowSize";
import { totalImpacts } from "./constants/totalImpacts";

const InfoBanner = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <div className="flex flex-col justify-center items-center bg-[#F0EEEF] py-[39px] mb-[50px]">
      <div>
        <div className="text-[#01005B] text-[25px] text-center">
          Our total green impact
        </div>

        {!isDesktop && (
          <div className="flex flex-col lg:flex-row justify-center items-center  w-full">
            {totalImpacts.map((impact, index) => (
              <div
                key={impact.alt}
                className="flex flex-col lg:flex-row h-[120px] my-5  w-full"
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#E4E4E4] mb-2">
                    <img
                      className="p-2 w-full h-full"
                      src={impact.image}
                      alt={impact.alt}
                    />
                  </div>

                  <h3 className="text-[#01005B] text-2xl font-semibold">
                    {impact.value}
                  </h3>
                  <p className="text-[#01005B]">{impact.description}</p>
                </div>

                {index < totalImpacts.length - 1 && (
                  <div
                    className={`${
                      isDesktop
                        ? "border-r mx-10 h-full"
                        : "border-b my-5 w-full"
                    } border-gray-300`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {isDesktop && (
        <div className="flex flex-col lg:flex-row justify-center items-center  w-full lg:w-auto">
          {totalImpacts.map((impact, index) => (
            <div
              key={impact.alt}
              className="flex flex-col lg:flex-row h-[120px] my-5  w-full lg:w-auto"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="w-[42px] h-[42px] rounded-full bg-[#E4E4E4] mb-2">
                  <img
                    className="p-2 w-full h-full"
                    src={impact.image}
                    alt={impact.alt}
                  />
                </div>

                <h3 className="text-[#01005B] text-2xl font-semibold">
                  {impact.value}
                </h3>
                <p className="text-[#01005B]">{impact.description}</p>
              </div>

              {index < totalImpacts.length - 1 && (
                <div
                  className={`${
                    isDesktop ? "border-r mx-10 h-full" : "border-b my-5 w-full"
                  } border-gray-300`}
                ></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoBanner;
