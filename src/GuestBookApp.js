import React, { useState } from 'react';
import GuestBookForm from './GuestBookForm';
import './GuestBookApp.css';

function GuestBookApp() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="guest-book-app">
      <h1>Livre d'or</h1>
      <GuestBookForm onFormSubmit={addEntry} />
      <div className="entries">
        <h2>Messages</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>Nom:</strong> {entry.name}, <strong>Email:</strong> {entry.email}, <strong>Pays:</strong> {entry.country}, <strong>Message:</strong> {entry.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GuestBookApp;