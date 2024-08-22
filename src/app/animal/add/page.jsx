'use client'
import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../../../firebase';

const AddAnimal = () => {
  const [animalData, setAnimalData] = useState({
    picture: '',
    species: '',
    name: '',
    description: '',
    status: 'Unlisted',
  });

  const handleChange = (e) => {
    setAnimalData({ ...animalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const animalRef = ref(db, 'animal/' + animalData.name); // Hayvan adı, benzersiz anahtar olarak kullanılıyor
  
    console.log("Gönderilen veri:", animalData); // Gönderilen veriyi loglayın
  
    set(animalRef, animalData)
      .then(() => {
        alert('Hayvan başarıyla eklendi!');
        console.log("Veri Firebase'e başarıyla eklendi");
        setAnimalData({
          picture: '',
          species: '',
          name: '',
          description: '',
          status: 'Unlisted',
        });
      })
      .catch((error) => {
        console.error('Hayvan eklenirken hata oluştu: ', error);
      });
  };
  

  return (
    <div>
      <h2>Add Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Picture URL:</label>
          <input type="text" name="picture" value={animalData.picture} onChange={handleChange} required />
        </div>
        <div>
          <label>Species:</label>
          <input type="text" name="species" value={animalData.species} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={animalData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={animalData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={animalData.status} onChange={handleChange}>
            <option value="Unlisted">Unlisted</option>
            <option value="Waiting">Waiting</option>
            <option value="Owned">Owned</option>
          </select>
        </div>
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
};

export default AddAnimal;
