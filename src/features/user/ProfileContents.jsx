import ProfileContentHeader from './ProfileContentHeader';
import ProfilePosts from './ProfilePosts';

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
