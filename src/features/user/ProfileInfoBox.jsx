import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import ProfileDescription from './ProfileDescription';

function ProfileInfoBox() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-8 px-5 pt-7 736:grid-cols-[0.4fr_1fr] 736:pt-14">
      <ProfileAvatar />

      <ProfileInfo />

      <ProfileDescription />
    </div>
  );
}

export default ProfileInfoBox;
