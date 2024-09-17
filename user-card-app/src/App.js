import React, { useState } from 'react';
import UserCard from './components/UserCard';
import Button from './components/Button';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  // State for storing users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', location: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', location: 'California' },
  ]);

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  // State to track which user is being edited
  const [editingUserId, setEditingUserId] = useState(null);

  // Get theme context
  const { isDarkMode } = useTheme();

  // Handler for adding a new user
  const addUser = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !location) {
      alert('All fields are required!');
      return;
    }

    // If editing a user, update their details
    if (editingUserId) {
      setUsers(users.map(user =>
        user.id === editingUserId
          ? { ...user, name, email, location }
          : user
      ));
      setEditingUserId(null);  // Reset editing state
    } else {
      // Add new user
      const newUser = {
        id: users.length + 1,
        name,
        email,
        location,
      };
      setUsers([...users, newUser]);
    }

    // Clear form inputs
    setName('');
    setEmail('');
    setLocation('');
  };

  // Handler for deleting a user
  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // Handler for updating user details
  const startEditing = (user) => {
    setName(user.name);
    setEmail(user.email);
    setLocation(user.location);
    setEditingUserId(user.id);
  };

  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
      color: isDarkMode ? '#e0e0e0' : '#333',
      minHeight: '100vh',
      transition: 'background-color 0.3s, color 0.3s',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      background: isDarkMode ? 'linear-gradient(135deg, #007bff 0%, #00d2ff 100%)' : 'linear-gradient(135deg, #007bff 0%, #00d2ff 100%)',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      transition: 'transform 0.3s ease-in-out',
      display: 'inline-block',
      margin: '0 auto',
    },
    form: {
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    input: {
      width: '250px',
      padding: '10px',
      borderRadius: '8px',
      border: isDarkMode ? '1px solid #444' : '1px solid #ccc',
      boxShadow: isDarkMode ? '0px 2px 4px rgba(0, 0, 0, 0.3)' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
      fontSize: '16px',
      margin: '5px 0',
      transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      outline: 'none',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
      gap: '20px', // Space between cards
      justifyContent: 'center', // Center the grid container
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Attractive Header */}
      <h1 style={styles.header}>User Card Application</h1>

      {/* Form for adding/updating a user */}
      <form onSubmit={addUser} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
          required
        />

        {/* Using the Button component */}
        <Button onClick={addUser} label={editingUserId ? "Update User" : "Add User"} />
      </form>

      {/* Grid container for UserCard components */}
      <div style={styles.cardContainer}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            location={user.location}
            onDelete={() => deleteUser(user.id)}
            onUpdate={() => startEditing(user)}
          />
        ))}
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
