'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './Header.css';

const Header = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="left">Animal Shelter Admin Panel</h1>
        <h1 className="right" onClick={handleBackToHome}>Home</h1>
      </div>
    </header>
  );
};

export default Header;
