import { Link } from 'react-router-dom';
import { useMutuals } from './userQueries&Mutations';

function ProfileMutuals() {
  const { mutualUsers, mutualsError } = useMutuals();

  if (mutualsError) return;

  const first3Mutuals = mutualUsers.slice(0, 3);

  const remainingMutualsCount = mutualUsers.slice(3).length;

  return (
    <div>
      <Link>
        <p className="mt-5">
          <span className="text-[1.2rem] text-gray-700">Followed by </span>
          {first3Mutuals.map((user, i, arr) => (
            <span className=" font-medium" key={user.$id}>
              {user.username}
              {arr[i + 1] && ', '}
            </span>
          ))}{' '}
          {remainingMutualsCount > 0 && (
            <span className="text-[1.2rem] text-gray-700">
              + {remainingMutualsCount} more
            </span>
          )}
        </p>
      </Link>
    </div>
  );
}

export default ProfileMutuals;
