import { useEffect, useState } from "react";
import "swiper/css";

const AboutYou = () => {
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
    <div className="flex items-center justify-between bg-[#F0EEEF]  px-[200px] py-[83px]">
      <div className="relative">
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
          className="absolute right-[-70px] bottom-[-70px] w-[128px] h-[175px] border-4 border-white cursor-pointer
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

      <div className="w-[619px]">
        <div className="text-3xl text-[#2A2996] mb-5">Be your best self.</div>

        <div className="mb-[30px] text-[#6C6C6C]">
          Hi! My name’s [Insert Name], and I founded [Insert] in ____.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
          <br />
          <br />
          Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
          placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
          nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
          congue, faucibus libero nec, placerat ligula.
          <br />
          <br />
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          <br />
          <br />
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
          sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
          convallis urna massa at nibh.
          <br />
          <br />
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien.
          <br />
          <br />
          Cras mattis varius mollis.
        </div>

        <div>
          <button className="relative flex justify-between items-center rounded px-[90px] py-[16px] bg-[#01005B]">
            <p className="text-white text-base">Customize Your Outfit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
