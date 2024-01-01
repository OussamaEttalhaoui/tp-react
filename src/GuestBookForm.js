import React, { useState } from 'react';
import './GuestBookForm.css';

function GuestBookForm({ onFormSubmit }) {
  // État local pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });

  // Fonction appelée à chaque changement dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Met à jour l'état avec la nouvelle valeur du champ
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Appelle la fonction onFormSubmit avec les données du formulaire
    onFormSubmit(formData);
    // Réinitialise les champs du formulaire après la soumission
    setFormData({
      name: '',
      email: '',
      country: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}  className="guest-book-form" >
      {/* Chaque champ du formulaire est associé à une valeur de l'état et à une fonction de gestion du changement */}
      <label>
        Nom:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Pays:
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      {/* Bouton de soumission du formulaire */}
      <button type="submit" className='blue-button' >Envoyer</button>
    </form>
  );
}

export default GuestBookForm;