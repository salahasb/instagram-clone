import { NavLink } from 'react-router-dom';
import { useLoggedInUser } from '../../features/authentication/authQueries&Mutations';

function AvatarNav() {
  const {
    user: { username, avatar },
  } = useLoggedInUser();

  const avatarSrc = avatar ? avatar : 'default-profile-picture.png';
  return (
    <NavLink
      to={username}
      className={({ isActive }) =>
        `1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors ${isActive && 'font-bold'}`
      }
    >
      <img
        src={avatarSrc}
        className="w-10 rounded-full "
        alt="user's Profile picture"
      />

      <span className="1263:inline hidden">Profile</span>
    </NavLink>
  );
}

export default AvatarNav;
