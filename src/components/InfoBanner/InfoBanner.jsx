import { totalImpacts } from "./constants/totalImpacts";

const InfoBanner = () => {
  return (
    <div className="flex flex-col jusify-center items-center bg-[#F0EEEF] py-[39px]">
      <div className="text-[#01005B] text-[25px]">Our total green impact</div>

      <div className="flex justify-center items-center">
        {totalImpacts.map((impact, index) => (
          <div
            key={index}
            className=" flex h-[120px]"
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
              <div className="border-r border-gray-300 h-full mx-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBanner;
