import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('week');
  const [userData] = useState({
    name: 'Алексей',
    level: 5,
    experience: 1250,
    position: 12
  });

  const [leaderboardData] = useState([
    { id: 1, name: 'Мария Петрова', level: 12, experience: 3420, position: 1, avatar: '🎓' },
    { id: 2, name: 'Иван Сидоров', level: 11, experience: 3150, position: 2, avatar: '👨‍🏫' },
    { id: 3, name: 'Анна Кузнецова', level: 10, experience: 2980, position: 3, avatar: '✍️' },
    { id: 4, name: 'Дмитрий Волков', level: 9, experience: 2750, position: 4, avatar: '📚' },
    { id: 5, name: 'Елена Орлова', level: 9, experience: 2650, position: 5, avatar: '🎭' },
    { id: 6, name: 'Александр Новиков', level: 8, experience: 2400, position: 6, avatar: '🔍' },
    { id: 7, name: 'Ольга Соколова', level: 8, experience: 2350, position: 7, avatar: '🎓' },
    { id: 8, name: 'Михаил Лебедев', level: 7, experience: 2100, position: 8, avatar: '👨‍🏫' },
    { id: 9, name: 'Татьяна Морозова', level: 7, experience: 2050, position: 9, avatar: '✍️' },
    { id: 10, name: 'Константин Власов', level: 6, experience: 1900, position: 10, avatar: '📚' },
    { id: 11, name: 'Наталья Жукова', level: 6, experience: 1850, position: 11, avatar: '🎭' },
    { id: 12, name: 'Алексей Иванов', level: 5, experience: 1250, position: 12, avatar: '🔍' }, // Current user
    { id: 13, name: 'Сергей Попов', level: 5, experience: 1200, position: 13, avatar: '🎓' },
    { id: 14, name: 'Ирина Семенова', level: 4, experience: 1100, position: 14, avatar: '👨‍🏫' },
    { id: 15, name: 'Владимир Федоров', level: 4, experience: 1050, position: 15, avatar: '✍️' }
  ]);

  const timeFilters = [
    { id: 'day', label: 'Сегодня' },
    { id: 'week', label: 'Неделя' },
    { id: 'month', label: 'Месяц' },
    { id: 'all', label: 'Все время' }
  ];

  return (
    <div className="leaderboard">
      <div className="container">
        <div className="leaderboard-header">
          <h2>Таблица лидеров</h2>
          <div className="time-filters">
            {timeFilters.map(filter => (
              <button
                key={filter.id}
                className={`filter-button ${timeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setTimeFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="leaderboard-content">
          <div className="user-rank">
            <div className="user-card">
              <div className="user-position">#{userData.position}</div>
              <div className="user-info">
                <div className="user-avatar">🎓</div>
                <div className="user-details">
                  <h3>{userData.name}</h3>
                  <p>Уровень {userData.level} | {userData.experience} опыта</p>
                </div>
              </div>
              <div className="user-stats">
                <span className="user-level">Ур. {userData.level}</span>
                <span className="user-experience">{userData.experience} XP</span>
              </div>
            </div>
          </div>

          <div className="top-three">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <div key={user.id} className={`top-user top-${index + 1}`}>
                <div className="position-badge">
                  {index === 0 && '🥇'}
                  {index === 1 && '🥈'}
                  {index === 2 && '🥉'}
                </div>
                <div className="user-avatar-large">{user.avatar}</div>
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p>#{user.position} • Ур. {user.level}</p>
                </div>
                <div className="user-experience">
                  {user.experience} XP
                </div>
              </div>
            ))}
          </div>

          <div className="leaderboard-list">
            <div className="list-header">
              <span>Позиция</span>
              <span>Игрок</span>
              <span>Уровень</span>
              <span>Опыт</span>
            </div>
            {leaderboardData.slice(3).map(user => (
              <div key={user.id} className="leaderboard-item">
                <div className="item-position">#{user.position}</div>
                <div className="item-user">
                  <span className="user-avatar">{user.avatar}</span>
                  <span className="user-name">{user.name}</span>
                </div>
                <div className="item-level">Ур. {user.level}</div>
                <div className="item-experience">{user.experience} XP</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;