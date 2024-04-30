import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import AppHeader from './navigation/AppHeader';

function PageMobileHeader({ pageTitle, children }) {
  return (
    <AppHeader>
      <div className="flex w-full items-center justify-between">
        <Link to={-1}>
          <FaAngleLeft size={25} />
        </Link>

        <p className="text-[1.6rem] font-semibold">{pageTitle}</p>

        <div>{children}</div>
      </div>
    </AppHeader>
  );
}

export default PageMobileHeader;
