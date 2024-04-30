function Avatar({ avatar, className }) {
  const src = avatar || '/default-profile-picture.png';
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full ${className}`}
    >
      <img src={src} alt="user's Profile picture" />
    </div>
  );
}

export default Avatar;
