import MainContentContainer from '../../components/MainContentContainer';
import NotFound from '../../components/NotFound';
import PageMobileHeader from '../../components/PageMobileHeader';
import Spinner from '../../components/Spinner';
import PostDetail from './PostDetail';
import { usePost } from './postQueries&Mutations';

function PostPage() {
  // console.log(config.theme.screens['736']);
  // const desktopScreen = config.theme.screens['736'].match(/\d+/g)[0] * 16;
  // //
  // const viewportWidth = window.innerWidth;

  // if (viewportWidth >= desktopScreen) return <PostModal />;

  const { isLoadingPost, post, postError } = usePost();

  // if (isLoadingPost) return <Spinner className=" fill-gray-400" />;
  if (postError) return <NotFound />;
  return (
    <MainContentContainer>
      <PageMobileHeader pageTitle="Post" />
      {isLoadingPost ? (
        <Spinner className=" fill-black" />
      ) : (
        <PostDetail post={post} />
      )}
    </MainContentContainer>
  );
}

export default PostPage;
