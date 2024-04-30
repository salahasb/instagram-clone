import { Client, Account, Storage, Databases, Avatars } from 'appwrite';

export const config = {
  url: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databasesId: import.meta.env.VITE_APPWRITE_DATABASES_ID,
  storagesId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  postsCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
  followsCollectionId: import.meta.env.VITE_APPWRITE_FOLLOWS_COLLECTION_ID,
  commentsCollectionId: import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID,
  likesCollectionId: import.meta.env.VITE_APPWRITE_LIKES_COLLECTION_ID,
  notificationsCollectionId: import.meta.env
    .VITE_APPWRITE_NOTIFICATIONS_COLLECTION_ID,
};

// base
export const client = new Client();

// initializing
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// services
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);

// const result = avatars.getInitials();
