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
    <nav className=" sticky bottom-0  left-0 border border-gray-200 py-4 736:top-0 736:h-dvh 736:w-fit 736:px-10 736:py-16 1263:w-[24.5rem] 1919:w-[33.5rem]">
      <ul className="flex items-center justify-around 736:h-full 736:flex-col 736:gap-4 1263:items-start">
        <li className="order-1 hidden 736:block 1263:w-full">
          <Link className="inline-block 1263:pl-5" to="/">
            <FaInstagram size={25} className="block 1263:hidden" />

            <InstaTextLogo className="hidden 1263:block" />
          </Link>
        </li>

        <li className="order-2 text-2xl 736:mt-10 1263:w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex rounded-xl transition-colors  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100 ${isActive && 'font-bold'}`
            }
          >
            <PiHouseBold size={26} />
            <div className="hidden 1263:block">Home</div>
          </NavLink>
        </li>
        <li className="order-3 text-2xl 1263:w-full">
          <button
            to=""
            className="flex rounded-xl transition-colors  736:w-full 736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100"
          >
            <LuSearch size={25} />
            <span className="hidden 1263:inline">Search</span>
          </button>
        </li>
        <li className="order-4 text-2xl 736:order-8 1263:w-full">
          <button
            // to=""
            className="flex rounded-xl transition-colors 736:w-full  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100"
          >
            <CgAddR size={25} />
            <span className="hidden 1263:inline">Create</span>
          </button>
        </li>
        <li className="order-5 text-2xl 1263:w-full">
          <NavLink
            to="reels"
            className=" flex rounded-xl transition-colors  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100"
          >
            <img src="icons/reels-icon.svg" className="w-9" alt="reels icon" />
            <span className="hidden 1263:inline">Reels</span>
          </NavLink>
        </li>
        <li className="hidden text-2xl 736:order-3 736:block 1263:w-full">
          <NavLink
            to="explore"
            className="flex rounded-xl transition-colors  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100"
          >
            <FaRegCompass size={25} />
            <span className="hidden 1263:inline">Explore</span>
          </NavLink>
        </li>
        <li className="hidden text-2xl 736:order-6 736:block   1263:w-full">
          <NavLink
            to="direct"
            className=" flex rounded-xl transition-colors  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100"
          >
            <img src="icons/instagram-share-icon.svg" className="w-9" alt="" />
            <span className="hidden 1263:inline">Messages</span>
          </NavLink>
        </li>
        <li className="hidden text-2xl 736:order-7 736:block 1263:w-full">
          <button className="flex rounded-xl transition-colors 736:w-full  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100">
            <FaRegHeart size={23} />
            <span className="hidden 1263:inline">Notifications</span>
          </button>
        </li>
        <li className="order-6 text-2xl 736:order-9 1263:w-full">
          <NavAvatar />
        </li>

        <Uploader />

        <li className="order-10 mt-auto hidden text-2xl 736:block 1263:w-full">
          <button className=" flex rounded-xl transition-colors 736:w-full  736:py-5 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100">
            <FaThreads size={25} />
            <span className="hidden 1263:inline">Threads</span>
          </button>
        </li>
        <li className="order-11 hidden text-2xl 736:block 1263:w-full">
          <button className="flex rounded-xl transition-colors 736:w-full 736:py-5  736:pb-0 1263:items-center 1263:gap-5 1263:p-5 1263:hover:bg-gray-100">
            <LuMenu size={25} />
            <span className="hidden 1263:inline">Menu</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
