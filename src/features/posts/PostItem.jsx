import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReelsIcon from '../../components/ReelsIcon';
import { CiImageOn } from 'react-icons/ci';
import { TbBoxMultiple } from 'react-icons/tb';
import PostPreviewOverlay from './PostPreviewOverlay';
import PostModal from './PostModal';
import tailwindConfig from '../../../tailwind.config';

function PostItem({ post }) {
  const [overlay, setOverlay] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const navigate = useNavigate();

  // navigate("",{})

  function handlePostModal() {
    // navigate to the post route directly if the viewport is in mobile
    const desktopScreen =
      tailwindConfig.theme.screens['736'].match(/\d+/g)[0] * 16;

    const viewportWidth = window.innerWidth;

    if (viewportWidth <= desktopScreen) return navigate(`/posts/${post.$id}`);

    // otherwise show post in a modal
    setShowPostModal(true);
  }

  return (
    <>
      <button
        // to={`/posts/${post.$id}`}
        className="relative  "
        onMouseEnter={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
        onClick={handlePostModal}
      >
        {post.contentType === 'video' ? (
          <img src={post.contentCover} alt="" />
        ) : (
          <img src={post.contents[0]} alt="" />
        )}

        {post.contentType === 'video' && (
          <ReelsIcon className="absolute right-3 top-3 z-10 !size-7 invert" />
        )}

        {post.contentType === 'image' && (
          <CiImageOn
            size={20}
            className="absolute right-2 top-3 z-10 stroke-[0.9] text-white"
          />
        )}

        {post.contentType === 'mix' && (
          <TbBoxMultiple
            size={20}
            className="absolute right-2 top-3 z-10 stroke-[1.8] text-white"
          />
        )}

        {/* for overlay */}
        {overlay && <PostPreviewOverlay />}
      </button>

      {showPostModal && (
        <PostModal post={post} setShowPostModal={setShowPostModal} />
      )}
    </>
  );
}

export default PostItem;
