
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animals: [],
};

export const {reducer, actions} = createSlice({
  name: 'animals',
  initialState,
  reducers: {},
});
