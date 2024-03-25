import { useState } from 'react';
import LoginSignup from './LoginSignup';

function LoginSignupToggle({ mode, setMode }) {
  // events handlers
  const handleToggle = () => {
    setMode((t) => (t === 'login' ? 'signup' : 'login'));
  };

  return (
    <div className="border-gray-300 py-8 text-center text-[1.4rem] text-black xs:border dark:border-gray-600 dark:text-white">
      <div>
        <p className="inline">
          {mode === 'login' ? "Don't have an account?" : 'Have an account?'}
        </p>{' '}
        <button
          onClick={handleToggle}
          className="font-semibold text-blue-500 outline-none focus:ring-2
          dark:text-blue-400"
        >
          {mode === 'login' ? 'Sign up' : 'Log in'}
        </button>
      </div>
    </div>
  );
}

function GetApp() {
  return (
    <div className="flex flex-col items-center gap-x-2 gap-y-6">
      <p className="basis-full text-[1.4rem] text-black dark:text-white">
        Get the app
      </p>

      <div className="flex justify-center gap-3">
        <img src="/google-store.png" alt="" className=" w-1/3" />

        <img src="/microsoft-store.png" alt="" className="w-1/3 " />
      </div>
    </div>
  );
}

function LoginSignupBox() {
  // to show either login or signup component in <LoginSignup/>
  const [mode, setMode] = useState('login');

  return (
    <div className="flex max-w-[35rem] flex-col gap-4">
      <LoginSignup mode={mode} />

      <LoginSignupToggle mode={mode} setMode={setMode} />

      <GetApp />
    </div>
  );
}
export default LoginSignupBox;
