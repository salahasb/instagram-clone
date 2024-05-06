import ContentMediaSlider from './ContentMediaSlider';
import PostImage from './PostImage';
import VideoPlayer from './VideoPlayer';

function PostContent({ post }) {
  return (
    <div className="[&_video]:contain-media max-h-[80dvh] bg-black 736:col-span-1 736:row-span-full  ">
      {post.contentType === 'image' && <PostImage src={post.contents[0]} />}

      {post.contentType === 'video' && <VideoPlayer src={post.contents[0]} />}
      {post.contentType === 'mix' && <ContentMediaSlider post={post} />}
    </div>
  );
}

export default PostContent;
