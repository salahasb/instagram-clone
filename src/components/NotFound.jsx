import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center *:mt-5">
      <h2 className="text-2xl  font-semibold">
        Sorry, this page isn&apos;t available.
      </h2>
      <p className="text-lg">
        The link you followed may be broken, or the page may have been removed.
        <Link className="text-brand-500" to="/">
          Go back{' '}
        </Link>
        to Instagram.
      </p>
    </div>
  );
}

export default NotFound;
