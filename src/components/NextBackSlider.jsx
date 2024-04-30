import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function NextBackSlider({ className, onClick, action }) {
  return (
    <button
      className={`center size-[2.8rem] rounded-full bg-white/80 ${action === 'next' ? 'ml-auto' : 'mr-auto'} ${className}`}
      onClick={onClick}
    >
      {action === 'next' ? (
        <IoIosArrowForward size={20} className="-mr-1 " />
      ) : (
        <IoIosArrowBack size={20} />
      )}
    </button>
  );
}

export default NextBackSlider;
