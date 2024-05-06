import { HiDotsHorizontal } from 'react-icons/hi';
import Avatar from '../../../components/Avatar';

function PostHeader({ post }) {
  return (
    <div className="flex items-center justify-between  border-b px-7  py-5 736:col-start-2">
      <div className="flex items-center gap-6">
        <div className="self-start">
          <Avatar className="size-12" />
        </div>

        <span className="text-xl font-medium">{post.creator.username} </span>
      </div>

      <button>
        <HiDotsHorizontal size={20} />
      </button>
    </div>
  );
}

export default PostHeader;
