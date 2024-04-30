import { createSlice } from '@reduxjs/toolkit';

const initialState = { isMutedVideo: false };

const postSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    muteVideo(state, action) {
      state.isMutedVideo = true;
    },
    unmuteVideo(state, action) {
      state.isMutedVideo = false;
    },
  },
});

export const getVideoSoundState = ({ post }) => post.isMutedVideo;

export const { muteVideo, unmuteVideo } = postSlice.actions;

export default postSlice.reducer;
