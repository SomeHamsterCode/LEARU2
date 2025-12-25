import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userData] = useState({
    name: 'Алексей',
    level: 5,
    experience: 1250,
    coins: 42,
    streak: 7,
    totalTasks: 42,
    completedTasks: 28
  });

  const progressPercentage = Math.round((userData.completedTasks / userData.totalTasks) * 100);

  const recentTasks = [
    { id: 1, title: 'Задание 1: Лексика', completed: true },
    { id: 2, title: 'Задание 2: Синонимы', completed: true },
    { id: 3, title: 'Задание 3: Орфография', completed: false },
    { id: 4, title: 'Задание 4: Пунктуация', completed: false },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="welcome-section">
          <h2>Привет, {userData.name}!</h2>
          <p>Продолжай практиковаться, чтобы улучшить свои навыки русского языка</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h3>Уровень</h3>
              <p>{userData.level}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-info">
              <h3>Опыт</h3>
              <p>{userData.experience}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🪙</div>
            <div className="stat-info">
              <h3>Монеты</h3>
              <p>{userData.coins}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <h3>Серия</h3>
              <p>{userData.streak} дней</p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h3>Твой прогресс</h3>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p>{userData.completedTasks} из {userData.totalTasks} заданий выполнено</p>
        </div>

        <div className="quick-actions">
          <Link to="/tasks" className="button">Начать новое задание</Link>
          <Link to="/profile" className="button button-secondary">Профиль</Link>
        </div>

        <div className="recent-tasks">
          <h3>Недавние задания</h3>
          <div className="tasks-list">
            {recentTasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <span className="task-title">{task.title}</span>
                <span className={`task-status ${task.completed ? 'completed' : 'incomplete'}`}>
                  {task.completed ? 'Выполнено' : 'Не выполнено'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;