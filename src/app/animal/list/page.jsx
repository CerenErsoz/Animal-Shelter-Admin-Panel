
'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../../firebase';
import '../../../styles/global.css';
import Header from '../../../components/header/header';
import { setAnimals, selectAnimal } from '../../../store/slices/animalsSlice';
import { useRouter } from 'next/navigation';

const AnimalList = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.animals);
  const router = useRouter();

  useEffect(() => {
    const animalRef = ref(db, 'animal/');
    const unsubscribe = onValue(animalRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const animalArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        dispatch(setAnimals(animalArray));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleManageStatus = (animal) => {
    dispatch(selectAnimal(animal));
    router.push('/animal/manage-status');
  };

  return (
    <div>
      <Header />
      <div className="table-container">
        {animals.length > 0 ? (
          <table className="animal-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Species</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.name}</td>
                  <td>
                    <img src={animal.picture} alt={animal.name} className="animal-picture" />
                  </td>
                  <td>{animal.species}</td>
                  <td>{animal.description}</td>
                  <td>{animal.status}</td>
                  <td>
                    <button onClick={() => handleManageStatus(animal)} className="btn-primary">
                      Manage Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No animals found.</p>
        )}
      </div>
    </div>
  );
};

export default AnimalList;
