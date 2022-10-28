import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface WalletState {
  name: string;
}

const initialState: WalletState = {
  name: 'all',
};

export const walletSlice = createSlice({
  name: 'walletChange',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    changeWallet: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeWallet} = walletSlice.actions;

export default walletSlice.reducer;
