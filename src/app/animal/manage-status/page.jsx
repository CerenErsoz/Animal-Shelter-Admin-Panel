
'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAnimalStatus } from '../../../store/slices/animalsSlice';
import { ref, update } from 'firebase/database';
import { db } from '../../../../firebase';
import '../../../styles/global.css';
import Header from '../../../components/header/header';

const ManageStatus = () => {
  const dispatch = useDispatch();
  const selectedAnimal = useSelector((state) => state.animals.selectedAnimal);

  const handleChangeStatus = (e) => {
    const newStatus = e.target.value;
    if (selectedAnimal) {
      const animalRef = ref(db, `animal/${selectedAnimal.id}`);
      update(animalRef, { status: newStatus })
        .then(() => {
          dispatch(updateAnimalStatus({ id: selectedAnimal.id, status: newStatus }));
          alert('Hayvan durumu başarıyla güncellendi!');
        })
        .catch((error) => {
          console.error('Durum güncellenirken hata oluştu: ', error);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="manage-status-container">
        <h2>Manage Status for {selectedAnimal?.name}</h2>
        <div>
          <label>Current Status: {selectedAnimal?.status}</label>
          <select value={selectedAnimal?.status} onChange={handleChangeStatus}>
            <option value="Unlisted">Unlisted</option>
            <option value="Waiting">Waiting</option>
            <option value="Owned">Owned</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManageStatus;
