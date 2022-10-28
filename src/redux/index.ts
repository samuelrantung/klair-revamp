import {configureStore} from '@reduxjs/toolkit';
import WalletReducer from './slices/wallet/walletSlice';
import ModalReducer from './slices/modal/modalSlice';

export const store = configureStore({
  reducer: {WalletReducer, ModalReducer},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
