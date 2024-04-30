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

    throw new Error(error.message);
  }
}

export async function getUserByUsername(username) {
  try {
    // 1) get the user's info
    const { documents } = await databases.listDocuments(
      config.databasesId,
      config.usersCollectionId,
      [Query.equal('username', [username])],
    );

    const [user] = documents;

    if (!user) throw new Error('user not found');

    // 2) get the user's posts and follows count
    const { total: postsCount } = await databases.listDocuments(
      config.databasesId,
      config.postsCollectionId,
      [Query.equal('creator', [user.$id])],
    );

    return { ...user, postsCount };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function updateUserFollowInfo({ loggedUser, otherUser }) {
  try {
    const updateLoggedUser = databases.updateDocument(
      config.databasesId,
      config.usersCollectionId,
      loggedUser.id,
      JSON.stringify(loggedUser.body),
    );

    const updateOtherUser = databases.updateDocument(
      config.databasesId,
      config.usersCollectionId,
      otherUser.id,
      JSON.stringify(otherUser.body),
    );

    await Promise.all([updateLoggedUser, updateOtherUser]);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUsers(idList) {
  if (!idList.length) throw new Error();

  const res = await databases.listDocuments(
    config.databasesId,
    config.usersCollectionId,
    [Query.equal('$id', [...idList])],
  );

  // console.log(res);
  return res.documents;
}
