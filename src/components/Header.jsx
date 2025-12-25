import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [userData, setUserData] = useState({
    name: 'Алексей',
    level: 5,
    experience: 1250,
    coins: 42,
    streak: 7
  });

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Русский ЕГЭ Практика</h1>
          </div>
          <nav className="nav">
            <a href="/" className="nav-link">Главная</a>
            <a href="/tasks" className="nav-link">Задания</a>
            <a href="/leaderboard" className="nav-link">Лидеры</a>
          </nav>
          <div className="user-stats">
            <div className="stat-item">
              <span className="stat-icon">⭐</span>
              <span className="stat-value">{userData.level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⚡</span>
              <span className="stat-value">{userData.experience}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🪙</span>
              <span className="stat-value">{userData.coins}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🔥</span>
              <span className="stat-value">{userData.streak}</span>
            </div>
            <div className="user-avatar">
              <img src="/src/assets/avatar.png" alt="User" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;