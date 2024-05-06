import { BiHeart, BiSave } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { LuBookmark } from 'react-icons/lu';
import ShareIcon from '../../../components/ShareIcon';
import PostDate from './PostDate';

function PostActions() {
  return (
    <div className="flex flex-col gap-2 p-5 736:border-b">
      <div className="mb-3 flex gap-6">
        <button>
          <BiHeart size={27} className="text-gray-800" />
        </button>

        <button>
          <FaRegComment size={27} className="-scale-x-90  " />
        </button>

        <button>
          <ShareIcon className="w-9" />
        </button>

        <button className="ml-auto  ">
          <LuBookmark size={27} />
        </button>
      </div>

      <button className="-mb-2 inline-block w-fit text-[1.35rem] font-semibold">
        92 likes
      </button>

      <PostDate className="hidden 736:block" />
    </div>
  );
}

export default PostActions;
