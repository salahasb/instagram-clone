import ProfileContentHeader from './ProfileContentHeader';
import ProfilePosts from '../posts/components/profile-posts/ProfilePosts';

function ProfileContents() {
  return (
    <>
      <ProfileContentHeader />
      <div className="basis-full">
        <ProfilePosts />
      </div>
    </>
  );
}

export default ProfileContents;
