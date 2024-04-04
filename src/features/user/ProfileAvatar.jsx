import Avatar from '../../components/Avatar';
import { useUser } from './userQueries&Mutations';

function ProfileAvatar() {
  const {
    user: { avatar },
  } = useUser();

  return (
    <div className="736:row-span-2 mx-auto self-center">
      <Avatar className="736:size-56 size-32" avatar={avatar} />
    </div>
  );
}

export default ProfileAvatar;
