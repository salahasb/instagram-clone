import { NavLink } from 'react-router-dom';
import { useLoggedInUser } from '../../features/authentication/authQueries&Mutations';
import Avatar from '../Avatar';

function AvatarNav() {
  const {
    user: { username, avatar },
  } = useLoggedInUser();

  return (
    <NavLink
      to={username}
      className={({ isActive }) =>
        `1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-4 flex rounded-xl transition-colors ${isActive && 'font-bold'}`
      }
    >
      <Avatar avatar={avatar} className="size-10" />

      <span className="1263:inline hidden">Profile</span>
    </NavLink>
  );
}

export default AvatarNav;
