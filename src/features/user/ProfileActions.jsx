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
      <div className="flex basis-full gap-1 450:gap-3  736:order-1   736:ml-6 736:basis-auto">
        <Button type="secondary" onClick={() => navigate('/account/edit')}>
          Edit profile
        </Button>
        <Button type="secondary" onClick={() => navigate('')}>
          View archive
        </Button>
      </div>
    );
  }

  // otherwise...
  return (
    <div className="flex basis-full gap-1 450:gap-3  736:order-1   736:ml-6 736:basis-auto">
      <FollowButton />

      <Button
        type="secondary"
        className="px-4  450:px-10"
        onClick={() => navigate('/inbox/')}
      >
        Message
      </Button>

      <Button type="icon">
        <LuUserPlus className="-mr-1" />
      </Button>
    </div>
  );
}

export default ProfileActions;
