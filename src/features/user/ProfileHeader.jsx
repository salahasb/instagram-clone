import { BsGearWide } from 'react-icons/bs';
import AppHeader from '../../components/navigation/AppHeader';
import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useUser } from './userQueries&Mutations';
import useIsLoggedUser from '../../hooks/useIsLoggedUser';

function ProfileHeader() {
  const {
    user: { username },
  } = useUser();

  const isLoggedUser = useIsLoggedUser();

  return (
    <AppHeader>
      <div className="flex w-full items-center justify-between">
        <Link to={-1}>
          <FaAngleLeft size={25} />
        </Link>

        <p className="text-[1.6rem] font-semibold">{username}</p>

        <button>{isLoggedUser && <BsGearWide size={24} />}</button>
      </div>
    </AppHeader>
  );
}

export default ProfileHeader;
