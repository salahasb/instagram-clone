import { useUser } from './userQueries&Mutations';

function ProfileDescription() {
  const {
    user: { fullName, bio },
  } = useUser();

  return (
    <div className="736:col-start-2 col-span-2 text-[1.4rem]">
      <p className="mb-4 text-2xl font-semibold capitalize">{fullName}</p>
      <pre className=" ">{bio}</pre>
      {/* <p>🕵️‍♂️ Tech, Global & Mysterious Affairs! Stay informed.</p>
      <p>🏆 W/o Best Moroccan IG & FB page 2020/19</p>
      <p>✉️ Business inquiries: info.reditt@gmail.com</p>
      <p>Lorem ipsum dolor sit amet.</p> */}
    </div>
  );
}

export default ProfileDescription;
