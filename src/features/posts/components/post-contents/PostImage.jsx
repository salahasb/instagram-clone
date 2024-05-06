import { useState } from 'react';

// here we set width & height attrs initially before the image has been loaded (to avoid layout shift ), and then by listening to img load event we set the dimension to the img's dimension itself
function PostImage({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt=""
      onLoad={() => setIsLoaded(true)}
      className={`${isLoaded ? 'contain-media' : ''}`}
      width={300}
      height={500}
    />
  );
}

export default PostImage;
