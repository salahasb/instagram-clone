import { ID } from 'appwrite';
import { config, databases } from './appwrite.config';

export async function createUser(user) {
  try {
    const res = await databases.createDocument(
      config.databasesId,
      config.usersCollectionId,
      ID.unique(),
      user,
    );

    // if (!res) throw new Error();

    return res;
  } catch (error) {
    console.error(error);

    throw error;
  }
}
