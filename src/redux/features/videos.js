import { createSlice } from '@reduxjs/toolkit';

export const videos = createSlice({
  name: 'videos',
  initialState: { data: [] },
  reducers: {
    setVideoList: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setVideoList } = videos.actions;
export default videos.reducer;
