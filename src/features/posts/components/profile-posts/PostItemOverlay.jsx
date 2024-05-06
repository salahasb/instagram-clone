import { FaComment } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi2';

function PostPreviewOverlay() {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div className="center size-full bg-black text-white opacity-25"></div>

      <div className="center absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 gap-14 text-white">
        <div className="center gap-3">
          <HiHeart size={21} />
          <span className="text-2xl font-bold ">200</span>
        </div>

        <div className=" center gap-3">
          <FaComment size={19} className="-scale-x-95" />
          <span className="text-2xl font-bold ">50</span>
        </div>
      </div>
    </div>
  );
}

export default PostPreviewOverlay;
