import { createSlice } from "@reduxjs/toolkit";
import IUserProfile from "types/UserProfile";
import fetchUserProfiles from "utils/fetchUserProfiles";

interface IUserProfilesState {
  userProfiles: IUserProfile[];
  selectedUserProfile: IUserProfile;
}

const initialState = {
  userProfiles: fetchUserProfiles(17).sort(),
  selectedUserProfile: {},
} as IUserProfilesState;

export const userProfileSlice = createSlice({
  name: "userProfiles",
  initialState,
  reducers: {
    selectUserProfile(state, action) {
      const userProfile = state.userProfiles.find(
        (up) => up.id === action.payload
      ) as IUserProfile;
      state.selectedUserProfile = userProfile;
    },
    updateUserProfile(state, action) {
      const userListToUpdate = state.userProfiles.slice();
      const userToUpdate = state.userProfiles.find(
        (user) => user.id === action.payload.id
      ) as IUserProfile;
      const index = state.userProfiles.indexOf(userToUpdate);
      userListToUpdate[index] = action.payload;

      state.userProfiles = [...userListToUpdate];
    },
    removeUserProfilePicture(state, action) {
      const userListToUpdate = [...state.userProfiles];
      const userToUpdate = state.userProfiles.find(
        (user) => user.id === action.payload
      ) as IUserProfile;
      const index = state.userProfiles.indexOf(userToUpdate);
      userToUpdate.info.profilePicUrl = "";
      userListToUpdate[index] = userToUpdate;
      state.userProfiles = [...userListToUpdate];
    },
    loadMoreUserProfiles(state) {
      const newUserProfiles = fetchUserProfiles(16);
      state.userProfiles = [...state.userProfiles, ...newUserProfiles];
    },
    addNewUserProfile(state, action) {
      const newUserProfiles = [...state.userProfiles];
      newUserProfiles.unshift(action.payload);
      state.userProfiles = [...newUserProfiles];
    },
  },
});

export const {
  selectUserProfile,
  updateUserProfile,
  removeUserProfilePicture,
  loadMoreUserProfiles,
  addNewUserProfile,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
