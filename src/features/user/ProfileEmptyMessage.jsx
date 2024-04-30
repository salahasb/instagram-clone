function ProfileEmptyMessage({ resource, Icon, title, description }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-7  px-20 text-center">
      <button className="mb-3 flex size-[6.2rem] items-center justify-center rounded-full border-2 border-black">
        {<Icon size={40} className="-mt-[0.05rem] stroke-[1px]" />}
      </button>

      <h3 className="text-5xl font-extrabold">{title}</h3>

      <p className="text-[1.4rem]">{description}</p>

      {resource === 'posts' && (
        <button className="text-2xl font-medium text-brand-500">
          Share your first photo
        </button>
      )}
    </div>
  );
}

export default ProfileEmptyMessage;
