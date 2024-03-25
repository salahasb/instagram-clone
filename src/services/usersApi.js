import { ID, Query } from 'appwrite';
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

export async function getUserByEmail(email) {
  try {
    const { total } = await databases.listDocuments(
      config.databasesId,
      config.usersCollectionId,
      [Query.equal('email', [email])],
    );

    return total;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserByUsername(username) {
  try {
    const { total } = await databases.listDocuments(
      config.databasesId,
      config.usersCollectionId,
      [Query.equal('username', [username])],
    );

    return total;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
