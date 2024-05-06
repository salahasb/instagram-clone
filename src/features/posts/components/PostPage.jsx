import MainContentContainer from '../../../components/MainContentContainer';
import NotFound from '../../../components/NotFound';
import PageMobileHeader from '../../../components/PageMobileHeader';
import PostDetail from './PostDetail';
import { usePost } from '../postQueries&Mutations';
import PostLoadingSkeleton from './PostLoadingSkeleton';

function PostPage() {
  const { isLoadingPost, post, postError } = usePost();

  if (postError) return <NotFound />;
  return (
    <MainContentContainer>
      <PageMobileHeader pageTitle="Post" />
      {isLoadingPost ? (
        <PostLoadingSkeleton />
      ) : (
        <div className={`736:center h-full  `}>
          <PostDetail post={post} />
        </div>
      )}
    </MainContentContainer>
  );
}

export default PostPage;
