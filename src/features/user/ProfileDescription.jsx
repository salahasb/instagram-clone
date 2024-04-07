import useIsLoggedUser from '../../hooks/useIsLoggedUser';
import ProfileMutuals from './ProfileMutuals';
import { useUser } from './userQueries&Mutations';

function ProfileDescription() {
  const {
    user: { fullName, bio },
  } = useUser();

  const isLoggedUser = useIsLoggedUser();

  return (
    <div className="col-span-2 text-[1.4rem] 736:col-start-2">
      <p className=" text-2xl font-semibold capitalize">{fullName}</p>
      {bio && <pre className="mt-4">{bio}</pre>}
      {/* <p>🕵️‍♂️ Tech, Global & Mysterious Affairs! Stay informed.</p>
      <p>🏆 W/o Best Moroccan IG & FB page 2020/19</p>
      <p>✉️ Business inquiries: info.reditt@gmail.com</p>
      <p>Lorem ipsum dolor sit a met.</p> */}

      {!isLoggedUser && <ProfileMutuals />}
    </div>
  );
}

export default ProfileDescription;
