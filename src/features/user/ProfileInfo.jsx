import { RxDotsHorizontal } from 'react-icons/rx';
import ProfileActions from './ProfileActions';
import Follows from './ProfileSummary';
import { useUser } from './userQueries&Mutations';

function ProfileInfo() {
  const {
    user: { username, $id },
  } = useUser();

  return (
    <div className="flex flex-wrap items-center gap-5">
      <div className="text-[1.8rem] font-medium">{username}</div>

      {
        <button className="text-[5rem] 736:order-2">
          <RxDotsHorizontal size={27} />
        </button>
      }

      <ProfileActions />

      <Follows className="hidden 736:flex" userId={$id} />
    </div>
  );
}

export default ProfileInfo;
