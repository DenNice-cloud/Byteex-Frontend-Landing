import useWindowSize from "@/Hook/useWindowSize";
import "swiper/css";
import AnimationPhotoAboutYou from "./AnimationPhotoAboutYou";

const AboutYou = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <div
      className="flex items-center justify-between bg-[#F0EEEF]
      lg:flex-row lg:px-[200px] lg:py-[83px]
      flex-col px-[37px] py-[40px]
    "
    >
      {isDesktop && (
        <>
          <AnimationPhotoAboutYou />
          <div className="mx-[50px]"></div>
        </>
      )}

      <div className="w-full lg:w-[619px]">
        <div
          className="text-[#2A2996] mb-5
            lg:text-xl lg:text-left
            text-5xl text-center
          "
        >
          Be your best self.
        </div>

        {!isDesktop && <AnimationPhotoAboutYou />}

        <div
          className="mb-[30px] text-[#6C6C6C]
          lg:text-xl
          text-2xl
        "
        >
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

        {isDesktop && (
          <div>
            <button className="relative flex justify-between items-center rounded px-[90px] py-[16px] bg-[#01005B]">
              <p className="text-white text-base">Customize Your Outfit</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutYou;
