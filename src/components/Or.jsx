function Or() {
  return (
    <div className="relative my-8 flex w-full items-center justify-center  text-[1.3rem] font-medium text-gray-500 dark:text-gray-300">
      <span>OR</span>
      <div
        className={`absolute left-0 top-1/2 h-[0.1rem] w-[40%] bg-gray-300 dark:bg-gray-600`}
      ></div>
      <div
        className={`absolute right-0 top-1/2 h-[0.1rem] w-[40%] bg-gray-300 dark:bg-gray-600`}
      ></div>
    </div>
  );
}

export default Or;
