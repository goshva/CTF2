import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    currentChatId: null,
  },
  reducers: {
    setCurrentChatId(state, action) {
      state.currentChatId = action.payload;
    },
  },
});

export const { setCurrentChatId } = chatSlice.actions;
export default chatSlice.reducer;
