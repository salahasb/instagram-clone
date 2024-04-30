import PostComments from './PostComments';
import PostActions from './PostActions';
import AddComment from './AddComment';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostCommentItem from './PostCommentItem';
import { Link } from 'react-router-dom';
import PostDate from './PostDate';

function PostDetail({ post }) {
  return (
    <div className="736:center 736:h-full">
      <div className="grid   grid-cols-1   736:h-[70rem] 736:grid-cols-[1.5fr_1fr] 736:grid-rows-[auto_1fr]   736:border 54.68:grid-cols-[1fr_33.5rem]">
        <PostHeader post={post} />

        {/* {post.contentType !== 'mix' && ( */}
        {/* <div className="relative w-full max-w-[50%] overflow-hidden bg-black"> */}

        <PostContent post={post} />
        {/* </div> */}
        {/* // )} */}

        {/* <div className="flex basis-[45rem] flex-col bg-white "> */}
        <div className="flex flex-col">
          <PostComments post={post} />

          <PostActions />

          <PostCommentItem
            isPostCaption={true}
            mobile={true}
            content={post.caption}
            className="736:hidden"
          />

          <AddComment className="hidden 736:flex" />

          <Link to="" className="pl-5 text-[1.4rem] text-gray-500 736:hidden">
            View all 95 comments
          </Link>

          <PostDate className="my-2 pl-5 736:hidden" />
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
