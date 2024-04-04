// export async function getUserPostsCount(id) {
//   try {
//     const { total } = await databases.listDocuments(
//       config.databasesId,
//       config.postsCollectionId,
//       [Query.equal('creator', [id])],
//     );
//     console.log(total);
//     return total;
//   } catch (error) {
//     console.error(error);
//   }
// }
