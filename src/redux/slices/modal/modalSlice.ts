import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface WalletState {
  isOpen: boolean;
}

const initialState: WalletState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;
