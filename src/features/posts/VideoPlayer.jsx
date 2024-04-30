import { useRef } from 'react';
import { IoMdVolumeOff } from 'react-icons/io';
import { IoMdVolumeHigh } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoSoundState, muteVideo, unmuteVideo } from './postSlice';

function VideoPlayer({ src, autoplay = true }) {
  const dispatch = useDispatch();
  const isMuted = useSelector(getVideoSoundState);

  const videoPlayer = useRef(null);

  function handleVideoPlayer() {
    if (videoPlayer.current.paused) {
      videoPlayer.current.play();
    } else {
      videoPlayer.current.pause();
    }
  }

  return (
    <div className="relative size-full">
      <video
        autoPlay={autoplay}
        // preload="none"
        // poster={}
        muted={isMuted}
        ref={videoPlayer}
        className="size-full object-cover object-center"
        onClick={handleVideoPlayer}
      >
        <source type="video/mp4" src={src} />
      </video>

      <button
        className="center  absolute bottom-5 right-5 flex size-12 rounded-full bg-black text-white "
        onClick={() => dispatch(isMuted ? unmuteVideo() : muteVideo())}
      >
        {isMuted ? <IoMdVolumeOff size={17} /> : <IoMdVolumeHigh size={17} />}
      </button>
    </div>
  );
}

export default VideoPlayer;
