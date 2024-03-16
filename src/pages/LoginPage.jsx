import LoginSignupBox from "../features/authentication/LoginSignupBox";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <div>
      <div className="flex h-screen flex-col [&>div]:flex [&>div]:w-full [&>div]:flex-1 [&>div]:items-center">
        <div>
          <div className="mx-auto flex max-w-[75rem] flex-1 basis-1/2 items-center justify-center gap-[3rem] *:flex-1">
            <div className="54.68:block hidden">
              <img
                src="/insta-app-screenshot.png"
                alt="instagram app screenshot"
              />
            </div>
            <LoginSignupBox />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
