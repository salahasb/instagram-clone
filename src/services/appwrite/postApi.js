import { Query } from 'appwrite';
import { config, databases } from './appwrite.config';

export async function getUserPosts(id) {
  try {
    const { documents } = await databases.listDocuments(
      config.databasesId,
      config.postsCollectionId,
      [Query.equal('creator', [id])],
    );

    return documents;
  } catch (error) {
    console.error(error);

    throw new Error(error.message);
  }
}

export async function getPostById(id) {
  try {
    const post = await databases.getDocument(
      config.databasesId,
      config.postsCollectionId,
      id,
    );

    return post;
  } catch (error) {
    console.error(error);

    throw new Error(error.message);
  }
}
