import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Алексей',
    level: 5,
    experience: 1250,
    coins: 42,
    streak: 7,
    totalTasks: 42,
    completedTasks: 28,
    accuracy: 76,
    nextLevel: 1500
  });

  const [character, setCharacter] = useState({
    name: 'Студент',
    avatar: 'student',
    level: 5,
    outfit: 'casual',
    accessories: ['glasses']
  });

  const avatars = [
    { id: 'student', name: 'Студент', emoji: '🎓' },
    { id: 'professor', name: 'Профессор', emoji: '👨‍🏫' },
    { id: 'writer', name: 'Писатель', emoji: '✍️' },
    { id: 'linguist', name: 'Лингвист', emoji: '📚' },
    { id: 'poet', name: 'Поэт', emoji: '🎭' },
    { id: 'grammatician', name: 'Грамматист', emoji: '🔍' }
  ];

  const outfits = [
    { id: 'casual', name: 'Повседневный' },
    { id: 'formal', name: 'Формальный' },
    { id: 'smart', name: 'Умный' },
    { id: 'creative', name: 'Креативный' }
  ];

  const accessories = [
    { id: 'glasses', name: 'Очки', emoji: '👓' },
    { id: 'hat', name: 'Шляпа', emoji: '🎩' },
    { id: 'scarf', name: 'Шарф', emoji: '🧣' },
    { id: 'bag', name: 'Сумка', emoji: '🎒' }
  ];

  const progressPercentage = Math.round((userData.experience % userData.nextLevel) / userData.nextLevel * 100);

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-header">
          <h2>Твой профиль</h2>
        </div>

        <div className="profile-content">
          <div className="stats-section">
            <div className="character-card">
              <div className="character-avatar">
                <span className="avatar-emoji">{avatars.find(a => a.id === character.avatar)?.emoji}</span>
              </div>
              <h3>{character.name}</h3>
              <p>Уровень {character.level}</p>
            </div>

            <div className="user-stats">
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <span className="stat-value">{userData.level}</span>
                  <span className="stat-label">Уровень</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">⚡</div>
                <div className="stat-info">
                  <span className="stat-value">{userData.experience}</span>
                  <span className="stat-label">Опыт</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">🪙</div>
                <div className="stat-info">
                  <span className="stat-value">{userData.coins}</span>
                  <span className="stat-label">Монеты</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">🔥</div>
                <div className="stat-info">
                  <span className="stat-value">{userData.streak}</span>
                  <span className="stat-label">Серия</span>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-header">
                <span>Прогресс до следующего уровня</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p>{userData.experience} / {userData.nextLevel}</p>
            </div>
          </div>

          <div className="character-section">
            <h3>Персонализация персонажа</h3>
            
            <div className="character-customization">
              <div className="customization-section">
                <h4>Аватар</h4>
                <div className="avatar-options">
                  {avatars.map(avatar => (
                    <div 
                      key={avatar.id}
                      className={`avatar-option ${character.avatar === avatar.id ? 'selected' : ''}`}
                      onClick={() => setCharacter({...character, avatar: avatar.id, name: avatar.name})}
                    >
                      <span className="avatar-emoji">{avatar.emoji}</span>
                      <span className="avatar-name">{avatar.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="customization-section">
                <h4>Одежда</h4>
                <div className="outfit-options">
                  {outfits.map(outfit => (
                    <div 
                      key={outfit.id}
                      className={`outfit-option ${character.outfit === outfit.id ? 'selected' : ''}`}
                      onClick={() => setCharacter({...character, outfit: outfit.id})}
                    >
                      {outfit.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="customization-section">
                <h4>Аксессуары</h4>
                <div className="accessory-options">
                  {accessories.map(accessory => (
                    <div 
                      key={accessory.id}
                      className={`accessory-option ${character.accessories.includes(accessory.id) ? 'selected' : ''}`}
                      onClick={() => {
                        const newAccessories = character.accessories.includes(accessory.id)
                          ? character.accessories.filter(a => a !== accessory.id)
                          : [...character.accessories, accessory.id];
                        setCharacter({...character, accessories: newAccessories});
                      }}
                    >
                      <span>{accessory.emoji}</span>
                      <span>{accessory.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h3>Статистика</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Всего заданий</h4>
                <p>{userData.totalTasks}</p>
              </div>
              <div className="stat-card">
                <h4>Выполнено</h4>
                <p>{userData.completedTasks}</p>
              </div>
              <div className="stat-card">
                <h4>Точность</h4>
                <p>{userData.accuracy}%</p>
              </div>
              <div className="stat-card">
                <h4>Лучшая серия</h4>
                <p>12 дней</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;