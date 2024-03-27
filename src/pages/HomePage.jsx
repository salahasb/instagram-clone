import { FaRegHeart } from 'react-icons/fa';
import AppHeader from '../components/navigation/AppHeader';
import InstaTextLogo from '../components/InstaTextLogo';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <AppHeader>
      <Link to="/">
        <InstaTextLogo />
      </Link>
      <Link to={'notifications'} className="ml-auto">
        <FaRegHeart size={23} />
      </Link>
      <Link to={''}>
        <img src="icons/instagram-share-icon.svg" className="w-9" alt="" />
      </Link>
    </AppHeader>
  );
}

export default HomePage;
