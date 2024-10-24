const CommentHeroSection = () => {
  return (
    <div className="px-[20px] py-[16px] bg-white rounded shadow-lg 
      lg:max-h-[172px] lg:w-[416px]
      h-[132px] w-[388px]
    ">
      <div className="flex mb-3">
        <div className="w-[40px] h-[40px] bg-[#1C2E58] mr-3 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="images/Ami-P.png"
            alt="avatar"
          />
        </div>

        <div className="flex items-center">
          <h3 className="text-[#676869] text-[15px] mr-3">Amy P.</h3>
          
          <img className="w-[60px] h-[10px] mr-2" src="icons/stars.svg" alt="stars" />

          <p className="text-[#828282] text-[11px] whitespace-nowrap">
            One of 500+ 5 Star Reviews Online
          </p>
        </div>
      </div>

      <p className="text-[#676869] lg:h-[55px] h-[40px] overflow-hidden text-ellipsis whitespace-pre-wrap text-[12px]">
        Overjoyed with my Loungewear set. I have the jogger and the sweatshirt.
        Quality product on every level. From the compostable packaging, to the
        supplied washing bag, even the garments smells like fresh herbs when I
        first held them.
      </p>
    </div>
  );
};

export default CommentHeroSection;
