import { ID, Query } from 'appwrite';
import { account, config, databases } from './appwrite.config';
import { createUser } from './userApi';

// for Checking if the email already exist (signup form)
export async function checkEmail(email) {
  try {
    const res = await databases.listDocuments(
      config.databasesId,
      config.usersCollectionId,
      [Query.equal('email', [email])],
    );

    return res.documents[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// for Checking if the username already exist (signup form)
export async function checkUsername(username) {
  try {
    const res = await databases.listDocuments(
      config.databasesId,
      config.usersCollectionId,
      [Query.equal('username', [username])],
    );

    // if (!res.total) throw new Error();

    return res.documents[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signup({ fullName, email, password, username }) {
  try {
    // create new account in auth service
    const userRes = await account.create(
      ID.unique(),
      email,
      password,
      fullName,
    );

    // register the new account in users collection
    const user = await createUser({
      accountId: userRes.$id,
      fullName,
      username,
      email,
    });

    // login the account
    await login(email, password);

    return user;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function login(email, password) {
  try {
    await account.createEmailSession(email, password);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function logout() {
  try {
    const res = await account.deleteSession('current');

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getLoggedInUser() {
  try {
    const { email } = await account.get();

    // get the logged user info
    const user = await checkEmail(email);

    return user;
  } catch (error) {
    console.log(error);
    // throw new Error(error.message);
    throw new Error(error.message);
  }
}
