import { useEffect, useRef, useState } from 'react';
import NextBackSlider from '../../../../components/NextBackSlider';
import PostImage from './PostImage';
import SliderDots from './SliderDots';
import VideoPlayer from './VideoPlayer';
import { useLocation, useSearchParams } from 'react-router-dom';

function ContentMediaSlider({ post }) {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({ index: 1 });
  console.log(useLocation());
  const postContentLength = post.contents.length;

  const index = +searchParams.get('index');
  console.log(index);

  useEffect(() => {
    if (index > postContentLength)
      setSearchParams({ index: postContentLength });

    if (index < 1) setSearchParams({ index: 1 });
  }, [index, postContentLength, setSearchParams]);

  const rootElement = useRef(null);

  // for playing / pausing videos when it enter the view section of the slider
  useEffect(() => {
    if (!rootElement.current) return;

    const callback = (entries) => {
      if (entries.length === 1) {
        const video = entries[0];
        video.isIntersecting ? video.target.play() : video.target.pause();
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: rootElement.current,
      threshold: 1,
    });

    const videos = rootElement.current.querySelectorAll('video');

    videos.forEach((video) => {
      observer.observe(video);
    });

    return () =>
      videos.forEach((video) => {
        observer.unobserve(video);
      });
  }, []);

  if (index > postContentLength || index < 1) return null;

  return (
    <div className={`relative h-full overflow-hidden  `} ref={rootElement}>
      <div
        className={`flex h-full  transition-transform  *:shrink-0`}
        style={{ transform: `translateX(-${index - 1}00%)` }}
      >
        {post.contents.map((src, i) => {
          if (src.includes('.jpeg')) return <PostImage src={src} key={i} />;

          if (src.includes('.mp4'))
            return <VideoPlayer autoplay={false} src={src} key={i} />;
        })}
      </div>

      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2   px-5">
        {index !== 1 && (
          <NextBackSlider
            action="previous"
            onClick={() => setSearchParams({ index: index - 1 })}
          />
        )}

        {index !== postContentLength && (
          <NextBackSlider
            action="next"
            onClick={() => setSearchParams({ index: index + 1 })}
          />
        )}
      </div>

      <SliderDots list={post.contents} current={index} />
    </div>
  );
}

export default ContentMediaSlider;
