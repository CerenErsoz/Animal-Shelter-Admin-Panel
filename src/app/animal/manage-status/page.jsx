'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAnimalStatus } from '../../../store/slices/animalsSlice';
import { ref, update } from 'firebase/database';
import { db } from '../../../../firebase';
import '../../../styles/global.css';
import Header from '../../../components/header/header';
import { useRouter } from 'next/navigation'; // Import useRouter

const ManageStatus = () => {
  const dispatch = useDispatch();
  const selectedAnimal = useSelector((state) => state.animals.selectedAnimal);
  const router = useRouter(); // Initialize useRouter

  const handleChangeStatus = (e) => {
    const newStatus = e.target.value;
    if (selectedAnimal) {
      const animalRef = ref(db, `animal/${selectedAnimal.id}`);
      update(animalRef, { status: newStatus })
        .then(() => {
          dispatch(updateAnimalStatus({ id: selectedAnimal.id, status: newStatus }));
          alert('Hayvan durumu başarıyla güncellendi!');
          router.push('/animal/list'); // Redirect to the animal list page
        })
        .catch((error) => {
          console.error('Durum güncellenirken hata oluştu: ', error);
        });
    }
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  const handleBackToList = () => {
    router.push('/animal/list');
  };

  return (
    <div>
      <Header />
      <div className="manage-status-container">
        <h2>
          Manage Ownership Status for <span style={{ color: '#5f9ea0' }}>{selectedAnimal?.name}</span>
        </h2>
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Current Status: {selectedAnimal?.status}
          </label>
          <select value={selectedAnimal?.status} onChange={handleChangeStatus} style={{ marginTop: '10px', padding: '5px', borderRadius: '4px' }}>
            <option value="Unlisted">Unlisted</option>
            <option value="Waiting">Waiting</option>
            <option value="Owned">Owned</option>
          </select>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleBackToHome} style={{ marginRight: '10px', padding: '10px 15px', borderRadius: '4px', backgroundColor: '#ddd', border: 'none', cursor: 'pointer' }}>
            Back to Home
          </button>
          <button onClick={handleBackToList} style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: '#ddd', border: 'none', cursor: 'pointer' }}>
            Back to Animal List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageStatus;
