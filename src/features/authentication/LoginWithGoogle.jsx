import { FcGoogle } from 'react-icons/fc';

function LoginWithGoogle({ className }) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center gap-x-3 text-[1.4rem] font-medium text-stone-700 dark:text-stone-300 ${className}`}
    >
      <FcGoogle size={18} />
      <p className=" ">Log in with Google</p>
    </div>
  );
}

export default LoginWithGoogle;
