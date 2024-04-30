import { createPortal } from 'react-dom';
import { HiDotsHorizontal } from 'react-icons/hi';
import Avatar from '../../components/Avatar';
import PostComments from './PostComments';
import PostActions from './PostActions';
import { BiX } from 'react-icons/bi';
import AddComment from './AddComment';
import VideoPlayer from './VideoPlayer';
import ContentMediaSlider from './ContentMediaSlider';
import PostImage from './PostImage';
import PostDetail from './PostDetail';

function PostModal({ post, setShowPostModal }) {
  return createPortal(
    <div className="center absolute left-0 top-0 z-10 h-dvh w-full bg-black/65 px-20 py-10 max-736:hidden">
      <button
        className="absolute right-5 top-5  text-gray-300 "
        onClick={() => setShowPostModal(false)}
      >
        <BiX size={35} className=" " />
      </button>

      <PostDetail post={post} />
    </div>,
    document.body,
  );
}

export default PostModal;
