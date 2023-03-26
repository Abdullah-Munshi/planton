import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
