import { BiHeart } from 'react-icons/bi';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';

function PostCommentItem({ isPostCaption, mobile, content, className, post }) {
  return (
    <div
      className={`flex gap-6 ${!mobile ? 'px-7 py-5' : 'pl-5'}  ${className}`}
    >
      {!mobile && (
        <div className=" ">
          <Avatar className="size-12" />
        </div>
      )}

      <div className="flex basis-full flex-col gap-3">
        <p className="fle  text-[1.3rem]">
          <Link to="" className="mr-3 text-xl font-medium">
            {post?.creator?.username || 'john doe'}
          </Link>
          <span className="first-letter:capitalize">{content}</span>
        </p>

        {!mobile && (
          <div className="flex gap-4 text-[1.15rem] text-gray-600">
            <span>25w</span>

            {!isPostCaption && (
              <>
                <button>3 likes </button> <button>Reply</button>
              </>
            )}
          </div>
        )}
      </div>

      {!isPostCaption && (
        <button>
          <BiHeart size={14} className="text-gray-800" />
        </button>
      )}
    </div>
  );
}

export default PostCommentItem;
