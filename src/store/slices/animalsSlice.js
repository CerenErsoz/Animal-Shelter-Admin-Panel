import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animals: [], // Tüm hayvanlar burada
  selectedAnimal: null, // Seçilen hayvanın detayı
};

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    setAnimals: (state, action) => {
      state.animals = action.payload;
    },
    selectAnimal: (state, action) => {
      state.selectedAnimal = action.payload;
    },
    updateAnimalStatus: (state, action) => {
      const { id, status } = action.payload;
      const animalIndex = state.animals.findIndex((animal) => animal.id === id);
      if (animalIndex >= 0) {
        state.animals[animalIndex].status = status;
      }
    },
  },
});

export const { setAnimals, selectAnimal, updateAnimalStatus } = animalsSlice.actions;
export default animalsSlice.reducer;
