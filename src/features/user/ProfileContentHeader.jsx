import { BsGrid3X3 } from 'react-icons/bs';
import { LiaUserTagSolid } from 'react-icons/lia';

function ProfileContentHeader() {
  return (
    <div className="736:justify-center 736:gap-24 736:text-xl flex border-b border-t border-gray-200 text-gray-500">
      <button className="736:grow-0 flex grow items-center justify-center gap-3 border-t-2 border-gray-800  py-7">
        <BsGrid3X3 size={22} className="736:size-5" />

        <div className="736:block hidden tracking-widest">POSTS</div>
      </button>

      <button className="736:grow-0 flex grow items-center justify-center gap-3 border-gray-800 py-7">
        <div>
          <img
            src="icons/reels-icon.svg"
            className="736:w-[1.2rem] w-9  opacity-45"
            alt="reels icon"
          />
        </div>
        <div className="736:block hidden tracking-widest ">REELS</div>
      </button>

      <button className="736:grow-0 flex grow items-center justify-center gap-3 border-gray-800 py-7">
        <LiaUserTagSolid size={25} className="736:size-7" />
        <div className="736:inline -mb-1 hidden tracking-widest ">TAGGED</div>
      </button>
    </div>
  );
}

export default ProfileContentHeader;
