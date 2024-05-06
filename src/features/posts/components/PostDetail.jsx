import PostComments from './PostComments';
import PostActions from './PostActions';
import AddComment from './AddComment';
import PostHeader from './PostHeader';
import PostContent from './post-contents/PostContent';
import PostCommentItem from './PostCommentItem';
import { Link } from 'react-router-dom';
import PostDate from './PostDate';

// the 'location' prop is the location where the post is rendered which is either "modal" or "feeds" or "post-page", so the post has slightly different shapes depend on it's location
function PostDetail({ post, location = 'post-page' }) {
  return (
    <div
      className={`grid grid-cols-1  736:grid-cols-[1.5fr_1fr] 736:grid-rows-[auto_1fr] 54.68:grid-cols-[1fr_35rem]  ${location === 'modal' ? 'max-w-[100rem] bg-white' : ''}  ${location === 'post-page' ? ' 736:border' : ''}`}
    >
      <PostHeader post={post} />

      <PostContent post={post} />

      <div className={` flex flex-col `}>
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
  );
}

export default PostDetail;
