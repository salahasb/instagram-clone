import { createPortal } from 'react-dom';
import { BiX } from 'react-icons/bi';
import PostDetail from './PostDetail';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// here, the post modal renders along with the post's route, but once we navigate directly to the post's route, it will route to "the post page" (shallow routing)
function PostModal({ post, setShowPostModal }) {
  const { pathname } = useLocation();

  // this effect for closing modal when user click browser's back button by listening the url changes
  useEffect(() => {
    function callback() {
      if (pathname === `/${post.creator.username}`) setShowPostModal(false);
    }

    window.addEventListener('popstate', callback);

    return () => {
      window.removeEventListener('popstate', callback);
    };
  }, [pathname, setShowPostModal, post]);

  // to close modal when the user clicks "close" button + navigating back
  function handleHideModal() {
    window.history.replaceState(null, null, `/${post.creator.username}`);
    setShowPostModal(false);
  }

  return createPortal(
    <div className="center absolute left-0 top-0 z-10 h-dvh w-full bg-black/65 px-20 py-10 max-736:hidden">
      <button
        className="absolute right-5 top-5  text-gray-300 "
        onClick={handleHideModal}
      >
        <BiX size={35} className=" " />
      </button>

      <PostDetail post={post} location="modal" />
    </div>,
    document.body,
  );
}

export default PostModal;
