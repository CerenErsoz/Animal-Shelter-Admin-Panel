import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animals: [],
};

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {},
});

export const { actions } = animalsSlice; 
export default animalsSlice.reducer; 
