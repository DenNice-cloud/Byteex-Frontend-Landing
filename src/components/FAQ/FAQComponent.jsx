import useWindowSize from "../../hook/useWindowSize";
import { MainButton } from "../../ui/Button";
import { useEffect, useState } from "react";

const { descriptionTab } = require("./constants/descriptionTab");

const FAQComponent = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [squareImage, setSquareImage] = useState(
    "images/Lucille-crewneck-sweatshirt-blush-and ayla-sleep-jogger-sepia-rose-2 2.png"
  );
  const [currentImage, setCurrentImage] = useState("images/screenshot.png");
  const [rectangleImage, setRectangleImage] = useState(
    "images/girl-yawning.png"
  );
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = rectangleImage;

      setRectangleImage(currentImage);
      setCurrentImage(squareImage);
      setSquareImage(temp);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, squareImage, rectangleImage]);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div
      className="flex 
      flex-col lg:flex-row
      justify-center items-center
      lg:pl-[200px] lg:py-[100px] lg:pr-[100px]
      px-[44px] py-[68px]
      
    "
    >
      <div
        className=" mb-[40px] 
          flex flex-col justify-center items-center lg:justify-start lg:items-start
          w-full
        "
      >
        <h1 className="text-[#01005B] text-[32px] lg:text-left text-center ">
          Frequently asked questions.
        </h1>

        {descriptionTab.map((tab, index) => (
          <div
            key={tab.keyName}
            className="py-4 border-b border-gray-300 my-4 w-full"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-[#01005B] text-lg font-semibold">
                {tab.title}
              </h3>

              <button className="text-2xl font-bold text-[#01005B]">
                {isOpen === index ? "-" : "+"}
              </button>
            </div>

            {isOpen === index && (
              <p className="text-[#676869] ">{tab.description}</p>
            )}
          </div>
        ))}
      </div>

      {isDesktop ? (
        <>
          <div className="mx-10"></div>

          <div className="relative">
            <div>
              <img
                className="w-[14rem] h-[22rem] object-cover mx-[80px]"
                src={currentImage}
                alt="main-photo"
              />
            </div>

            <div className="absolute left-[210px] top-[-110px] w-[8rem] h-[11rem] -z-[2]">
              <img
                className="w-full h-full object-cover "
                src={squareImage}
                alt="square-photo"
              />
            </div>

            <div
              className="absolute bottom-[-70px] left-[230px] 
              w-[6.25rem] h-[8rem] 
              bg-gradient-to-b from-[#F9F0E537] to-[#F9F0E5B2]
              -z-[2]"
            ></div>

            <div
              className="absolute top-[-70px] left-[30px] 
              w-[6.25rem] h-[8rem] 
              bg-gradient-to-b from-[#F9F0E537] to-[#F9F0E5B2]
              -z-[2]"
            ></div>

            <div className="absolute left-[0px] bottom-[-80px] w-[10rem] h-[8rem] -z-[2]">
              <img
                className="w-full h-full object-cover "
                src={rectangleImage}
                alt="rectangle-photo"
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="mb-[11px]">
            <MainButton />
          </div>

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
  );
};

export default FAQComponent;
