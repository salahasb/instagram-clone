import { ID, Query } from 'appwrite';
import { posts } from './posts';
import { config, databases } from '../services/appwrite.config';

export async function createPosts() {
  posts.forEach(async (post, i) => {
    await databases.createDocument(
      config.databasesId,
      config.postsCollectionId,
      ID.unique(),
      post,
    );
  });
}
