import PostCommentItem from './PostCommentItem';

function PostComments({ post }) {
  return (
    <div className="no-scrollbar hidden basis-full overflow-y-scroll 736:block">
      <div>
        <PostCommentItem
          isPostCaption={true}
          content={post.caption}
          post={post}
        />

        <PostCommentItem
          content={
            'Lorem ipsum dolor sit amet consectetur adipis sum a veniam?'
          }
        />

        <PostCommentItem
          content={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />

        <PostCommentItem content={'Lorem, ipsum.'} />
      </div>
    </div>
  );
}

export default PostComments;
