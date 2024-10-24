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
    <div className="flex justify-between items-center w-full pl-[200px] py-[100px] pr-[100px]">
      <div>
        <h1 className="text-[#01005B] text-[32px]">
          Frequently asked questions.
        </h1>

        {descriptionTab.map((tab, index) => (
          <div
            key={index}
            className="py-4 border-b border-gray-300 my-4 w-[630px]"
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
              <p className="text-[#676869]">{tab.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <div>
          <img
            className="w-[227px] h-[355px] object-cover mr-[123px]"
            src={currentImage}
            alt="main-photo"
          />
        </div>

        <div className="absolute left-[160px] top-[-150px] w-[167px] h-[253px] -z-[2]">
          <img
            className="w-full h-full object-cover "
            src={squareImage}
            alt="square-photo"
          />
        </div>

        <div
          className="absolute bottom-[-70px] left-[160px] 
              w-[150px] h-[190px] 
              bg-gradient-to-b from-[#F9F0E537] to-[#F9F0E5B2]
              -z-[2]"
        ></div>

        <div
          className="absolute top-[-70px] left-[-70px] 
              w-[150px] h-[190px] 
              bg-gradient-to-b from-[#F9F0E537] to-[#F9F0E5B2]
              -z-[2]"
        ></div>

        <div className="absolute left-[-80px] bottom-[-110px] w-[216px] h-[159px] -z-[2]">
          <img
            className="w-full h-full object-cover "
            src={rectangleImage}
            alt="rectangle-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
