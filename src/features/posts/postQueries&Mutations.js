import { useQuery } from '@tanstack/react-query';
import { getPostById, getUserPosts } from '../../services/appwrite/postApi';
import { POSTS, USERS } from '../../data/constants';
import { useUser } from '../user/userQueries&Mutations';
import { useParams } from 'react-router-dom';

export function useUserPosts() {
  const {
    user: { $id },
  } = useUser();

  const {
    isLoading: isLoadingUserPosts,
    data: posts,
    error: userPostsError,
  } = useQuery({
    queryKey: [USERS, $id, POSTS],
    queryFn: () => getUserPosts($id),
    // enabled: $id === null ? false : true,
  });

  return {
    isLoadingUserPosts,
    posts,
    userPostsError,
  };
}

export function usePost() {
  const { id } = useParams();

  const {
    isLoading: isLoadingPost,
    data: post,
    error: postError,
  } = useQuery({
    queryKey: [POSTS, id],
    queryFn: () => getPostById(id),
  });

  return {
    isLoadingPost,
    post,
    postError,
  };
}
