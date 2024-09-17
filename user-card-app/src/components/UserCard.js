// src/UserCard.js
import React from 'react';
import Button from './Button';  // Import the Button component for the delete button

// This component receives props (name, email, and location)
function UserCard({ name, email, location, onDelete, onUpdate }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>Email: <span style={styles.email}>{email}</span></p>
      <p style={styles.info}>Location: <span style={styles.location}>{location}</span></p>

      <div style={styles.buttonContainer}>
        {/* Delete button - triggers the onDelete prop */}
        <Button onClick={onDelete} label="Delete User" />

        {/* Update button - triggers the onUpdate prop */}
        <Button onClick={onUpdate} label="Update User" />
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease-in-out',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    border: '2px solid #007bff', // Border color
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    background: '#fff',
    marginBottom: '10px', // Space below the name
  },
  info: {
    fontSize: '16px',
    margin: '5px 0', // Space between lines
    color: '#333',
  },
  email: {
    color: '#007bff', // Blue color for email
    fontWeight: 'bold',
  },
  location: {
    color: '#555', // Dark gray color for location
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px',
  },
};

export default UserCard;
