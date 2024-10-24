import { useEffect, useState } from "react";

const AnimationPhotoAboutYou = () => {
  const [squareImage, setSquareImage] = useState(
    "images/Lucille-crewneck-sweatshirt-blush-and ayla-sleep-jogger-sepia-rose-2 2.png"
  );
  const [currentImage, setCurrentImage] = useState(
    "images/Lucille-crewneck-sweatshirt-blush-and ayla-sleep-jogger-sepia-rose-2 1.png"
  );
  const [rectangleImage, setRectangleImage] = useState(
    "images/near-window.jfif"
  );

  const handleFirstClick = () => {
    const squareImageTemp = squareImage;
    setSquareImage(currentImage);
    setCurrentImage(squareImageTemp);
  };

  const handleSecondClick = () => {
    const rectangleImageTemp = rectangleImage;
    setRectangleImage(currentImage);
    setCurrentImage(rectangleImageTemp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = rectangleImage;
      setRectangleImage(currentImage);
      setCurrentImage(squareImage);
      setSquareImage(temp);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, squareImage, rectangleImage]);
  
  return (
    <div
      className="flex flex-col justify-center items-center 
          py-[90px]"
    >
      <div className="w-[380px] h-[570px] relative">
        <div
          className="absolute left-[-70px] top-[-70px] w-[165px] h-[175px] border-4 border-white cursor-pointer 
            transition-transform duration-500 hover:scale-105"
          onClick={handleFirstClick}
        >
          <img
            className="w-full h-full object-cover transition-opacity duration-500 "
            src={squareImage}
            alt="square-photo"
          />
        </div>

        <div className="w-[380px] h-[570px]">
          <img
            className="w-full h-full object-cover transition-opacity duration-500 "
            src={currentImage}
            alt="main-photo"
          />
        </div>

        <div
          className="absolute right-[-70px] bottom-[-70px] 
              w-[165px] h-[175px]
              lg:w-[128px] lg:h-[175px] 
              border-4 border-white cursor-pointer
            transition-transform duration-500 hover:scale-105"
          onClick={handleSecondClick}
        >
          <img
            className="w-full h-full object-cover transition-opacity duration-500 "
            src={rectangleImage}
            alt="rectangle-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationPhotoAboutYou;
