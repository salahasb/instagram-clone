import ProfileEmptyContents from './ProfileEmptyContents';
import { HiOutlineCamera } from 'react-icons/hi2';

function ProfilePosts() {
  return (
    <div className="grow">
      {/* <div className="mb-28 grid grid-cols-3 gap-2 *:aspect-square *:overflow-hidden [&>*_img]:h-full [&>*_img]:w-full [&>*_img]:object-cover">
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="2OrtT.jpg" alt="" />
        </div>
        <div className=" ">
          <img src="instagram-logo-dark.png" alt="" />
        </div>
      </div> */}

      <ProfileEmptyContents
        title="Share Photos"
        description="When you share photos, they will appear on your profile."
        Icon={HiOutlineCamera}
        resource="posts"
      />
    </div>
  );
}

export default ProfilePosts;
