import { LuMenu, LuSearch } from 'react-icons/lu';
import { FaRegCompass, FaRegHeart, FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { PiHouseBold } from 'react-icons/pi';
import { CgAddR } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import InstaTextLogo from '../InstaTextLogo';
import NavAvatar from './NavAvatar';
import Uploader from '../../data/Uploader';

function NavBar() {
  return (
    <nav className=" 736:py-16 736:px-10  736:h-dvh 736:top-0 1263:w-[24.5rem] 1919:w-[33.5rem] 736:w-fit sticky bottom-0 left-0 border border-gray-200 py-4">
      <ul className="736:flex-col 736:gap-5 736:h-full 1263:items-start flex items-center justify-around">
        <li className="1263:w-full 736:block order-1 hidden">
          <Link className="1263:pl-5 inline-block" to="/">
            <FaInstagram size={25} className="1263:hidden block" />

            <InstaTextLogo className="1263:block hidden" />
          </Link>
        </li>

        <li className="1263:w-full 736:mt-10 order-2 text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors ${isActive && 'font-bold'}`
            }
          >
            <PiHouseBold size={26} />
            <div className="1263:block hidden">test</div>
          </NavLink>
        </li>
        <li className="1263:w-full order-3 text-2xl">
          <button
            to=""
            className="1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 736:w-full flex rounded-xl transition-colors"
          >
            <LuSearch size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 736:order-8 order-4 text-2xl">
          <button
            // to=""
            className="736:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors"
          >
            <CgAddR size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full order-5 text-2xl">
          <NavLink
            to="reels"
            className=" 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors"
          >
            <img src="icons/reels-icon.svg" className="w-9" alt="reels icon" />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 736:order-3 736:block hidden text-2xl">
          <NavLink
            to="explore"
            className="1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors"
          >
            <FaRegCompass size={25} />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 736:block 736:order-6 hidden   text-2xl">
          <NavLink
            to="direct"
            className=" 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors"
          >
            <img src="icons/instagram-share-icon.svg" className="w-9" alt="" />
            <span className="1263:inline hidden">test</span>
          </NavLink>
        </li>
        <li className="1263:w-full 736:block 736:order-7 hidden text-2xl">
          <button className="736:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors">
            <FaRegHeart size={23} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 736:order-9 order-6 text-2xl">
          <NavAvatar />
        </li>

        <Uploader />

        <li className="1263:w-full 736:block order-10 mt-auto hidden text-2xl">
          <button className=" 736:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5  1263:p-5 736:py-5 flex rounded-xl transition-colors">
            <FaThreads size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
        <li className="1263:w-full 736:block order-11 hidden text-2xl">
          <button className="736:w-full 1263:hover:bg-gray-100 1263:items-center 1263:gap-5 1263:p-5  736:py-5 736:pb-0 flex rounded-xl transition-colors">
            <LuMenu size={25} />
            <span className="1263:inline hidden">test</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
