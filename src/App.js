import React, { useState } from 'react';
import LoginPage from './LoginPage';
import CourseInfoPage from './CourseInfoPage';

export default function App() {
  // This state keeps track of which page we are on. It starts on 'login'.
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {/* If the state is 'login', show the LoginPage */}
      {currentPage === 'login' && (
        <LoginPage
          onLogin={() => console.log('Login button clicked')}
          onInfoClick={() => setCurrentPage('info')} // This changes the state to 'info'
        />
      )}

      {/* If the state changes to 'info', hide the login and show the CourseInfoPage */}
      {currentPage === 'info' && <CourseInfoPage />}
    </>
  );
}
