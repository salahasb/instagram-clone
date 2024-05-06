function PostLoadingSkeleton() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] 450:mx-auto  450:w-[50rem] ">
      <div className="col-span-1 row-span-1 p-5 ">
        <div className="size-20 animate-pulse rounded-full bg-gray-300/50"></div>
      </div>
      <div className="col-start-2 flex flex-col justify-center gap-3">
        <div className=" h-5 w-1/2 animate-pulse rounded-lg bg-gray-300/50"></div>
        <div className="  h-5 w-1/4 animate-pulse rounded-lg bg-gray-300/50"></div>
      </div>
      <div className="col-span-full h-[50dvh]  animate-pulse bg-gray-300/50"></div>
    </div>
  );
}

export default PostLoadingSkeleton;
