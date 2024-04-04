// import { useQuery } from '@tanstack/react-query';
// import { getUserPostsCount } from '../../services/postApi';
// import { POSTS_COUNT } from '../../utils/constants';

// export function usePosts($id) {
//   const {
//     isLoading,
//     data: postsCount,
//     error,
//   } = useQuery({
//     queryKey: [POSTS_COUNT, $id],
//     queryFn: () => getUserPostsCount($id),
//     enabled: $id === null ? false : true,
//     // Boolean($id),
//   });

//   return {
//     isLoading,
//     postsCount,
//     error,
//   };
// }
