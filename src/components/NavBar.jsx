import { LuMenu, LuSearch } from 'react-icons/lu';
import { FaRegCompass, FaRegHeart, FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { PiHouseBold } from 'react-icons/pi';
import { CgAddR } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import InstaTextLogo from './InstaTextLogo';
import AvatarNav from './navigation/AvatarNav';

function NavBar() {
  return (
    <nav className="425:order-1 425:py-16 425:static 425:w-auto 425:px-5 fixed bottom-0 w-full border border-gray-200 py-5">
      <ul className="425:flex-col 425:gap-5 425:h-full 1263:w-[24.5rem] 1919:w-[33.5rem] 1263:items-start flex items-center justify-around">
        <li className="1263:w-full 425:block order-1 hidden">
          <Link className="1263:pl-5 inline-block" to="/">
            <FaInstagram size={25} className="1263:hidden block" />

            <InstaTextLogo className="1263:block hidden" />
          </Link>
        </li>

        <li className="1263:w-full 425:mt-10 1263:text-2xl order-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors ${isActive && 'font-bold'}`
            }
          >
            <PiHouseBold size={26} />
            <div className="1263:block hidden">test</div>
          </NavLink>
        </li>
        <li className="1263:w-full 1263:text-2xl order-3">
          <button
            to=""
            className="1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 425:w-full flex rounded-xl transition-colors"
          >
            <LuSearch size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 425:order-8 1263:text-2xl order-4">
          <button
            // to=""
            className="425:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors"
          >
            <CgAddR size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 1263:text-2xl order-5">
          <NavLink
            to="reels"
            className=" 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors"
          >
            <img src="icons/reels-icon.svg" className="w-9" alt="reels icon" />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 425:order-3 425:block 1263:text-2xl hidden">
          <NavLink
            to="explore"
            className="1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors"
          >
            <FaRegCompass size={25} />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 425:block 425:order-6 1263:text-2xl   hidden">
          <NavLink
            to="direct"
            className=" 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors"
          >
            <img src="icons/instagram-share-icon.svg" className="w-9" alt="" />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 425:block 425:order-7 1263:text-2xl hidden">
          <button className="425:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors">
            <FaRegHeart size={23} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 425:order-9 1263:text-2xl order-6">
          <AvatarNav />
        </li>

        <li className="1263:w-full 425:block 1263:text-2xl order-10 mt-auto hidden">
          <button className=" 425:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 425:py-4 flex rounded-xl transition-colors">
            <FaThreads size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 425:block 1263:text-2xl order-11 hidden">
          <button className="425:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5 1263:p-5  425:py-4 425:pb-0 flex rounded-xl transition-colors">
            <LuMenu size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
