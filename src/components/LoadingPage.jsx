function LoadingPage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="flex basis-full flex-col items-center justify-center">
        <div className="flex basis-full items-center">
          <img
            src="/instagram-icon2.svg"
            className="w-28"
            alt="instagram logo"
          />
        </div>

        <div className="flex flex-col items-center">
          <span className=" text-2xl text-gray-600">from</span>
          <img
            src="/instagram-meta.webp"
            alt="meta logo"
            className="-mt-1 mb-16 h-14"
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
