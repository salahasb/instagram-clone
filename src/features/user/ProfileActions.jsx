import { LuUserPlus } from 'react-icons/lu';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import useIsLoggedUser from '../../hooks/useIsLoggedUser';
import FollowButton from './FollowButton';

function ProfileActions() {
  const isLoggedUser = useIsLoggedUser();

  const navigate = useNavigate();

  // this what will be rendered if the logged user who is the current profile
  if (isLoggedUser) {
    return (
      <div className="basis-full 736:order-1 736:ml-6 736:basis-[23rem]">
        <div className="flex max-w-[27rem] gap-1 *:grow ">
          <Button type="secondary" onClick={() => navigate('/account/edit')}>
            Edit profile
          </Button>
          <Button type="secondary" onClick={() => navigate('')}>
            View archive
          </Button>
        </div>
      </div>
    );
  }

  // otherwise...
  return (
    <div className=" basis-full 736:order-1 736:ml-6 736:basis-[23rem] ">
      <div className="flex max-w-[27rem] gap-1 736:gap-3 [&>*:not(:last-child)]:grow">
        <FollowButton />

        <Button
          type="secondary"
          className=""
          onClick={() => navigate('/inbox/')}
        >
          Message
        </Button>

        <Button type="icon" className=" ">
          <LuUserPlus className="-mr-1" />
        </Button>
      </div>
    </div>
  );
}

export default ProfileActions;
