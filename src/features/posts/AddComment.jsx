function AddComment({ className }) {
  return (
    <div className={`flex items-center px-8 py-5 ${className}`}>
      <input
        type="text"
        className="h-full w-full text-[1.4rem] placeholder:text-gray-500"
        placeholder="Add a comment..."
      />

      <button className="ml-auto text-[1.42rem] font-semibold text-brand-500">
        Post
      </button>
    </div>
  );
}

export default AddComment;
