import { useEffect, useRef, useState } from 'react';
import NextBackSlider from '../../components/NextBackSlider';
import PostImage from './PostImage';
import SliderDots from './SliderDots';
import VideoPlayer from './VideoPlayer';

function ContentMediaSlider({ post }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rootElement = useRef(null);

  // for playing / pausing videos when it enter the view section of the slider
  useEffect(() => {
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

  return (
    <div className={`relative h-full overflow-hidden  `} ref={rootElement}>
      <div
        className={`flex h-full  transition-transform  *:shrink-0`}
        style={{ transform: `translateX(-${currentSlide}00%)` }}
      >
        {post.contents.map((src, i) => {
          if (src.includes('.jpeg')) return <PostImage src={src} key={i} />;

          if (src.includes('.mp4'))
            return <VideoPlayer autoplay={false} src={src} key={i} />;
        })}
      </div>

      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2   px-5">
        {currentSlide !== 0 && (
          <NextBackSlider
            action="previous"
            onClick={() => setCurrentSlide((c) => c - 1)}
          />
        )}

        {currentSlide !== post.contents.length - 1 && (
          <NextBackSlider
            action="next"
            onClick={() => setCurrentSlide((c) => c + 1)}
          />
        )}
      </div>

      <SliderDots list={post.contents} current={currentSlide} />
    </div>
  );
}

export default ContentMediaSlider;
