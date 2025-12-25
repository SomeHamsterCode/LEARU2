import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TaskSelector.css';

const TaskSelector = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Задание 1: Лексика',
      description: 'Выбор правильного слова или словосочетания в контексте',
      difficulty: 'Средняя',
      completed: false,
      experience: 50
    },
    {
      id: 2,
      title: 'Задание 2: Орфография',
      description: 'Определение правильного написания слов',
      difficulty: 'Легкая',
      completed: true,
      experience: 40
    },
    {
      id: 3,
      title: 'Задание 3: Пунктуация',
      description: 'Расстановка знаков препинания в предложениях',
      difficulty: 'Средняя',
      completed: false,
      experience: 60
    },
    {
      id: 4,
      title: 'Задание 4: Морфология',
      description: 'Определение грамматических форм слов',
      difficulty: 'Сложная',
      completed: false,
      experience: 70
    },
    {
      id: 5,
      title: 'Задание 5: Синонимы',
      description: 'Нахождение синонимов к выделенным словам',
      difficulty: 'Средняя',
      completed: false,
      experience: 50
    },
    {
      id: 6,
      title: 'Задание 6: Антонимы',
      description: 'Нахождение антонимов к выделенным словам',
      difficulty: 'Средняя',
      completed: false,
      experience: 50
    },
    {
      id: 7,
      title: 'Задание 7: Фразеологизмы',
      description: 'Определение значения фразеологизмов',
      difficulty: 'Средняя',
      completed: false,
      experience: 55
    },
    {
      id: 8,
      title: 'Задание 8: Грамматическая основа',
      description: 'Нахождение подлежащего и сказуемого в предложениях',
      difficulty: 'Средняя',
      completed: false,
      experience: 60
    },
    {
      id: 9,
      title: 'Задание 9: Слитно, раздельно или через дефис',
      description: 'Правописание слов с НЕ, НИ, дефисных слов',
      difficulty: 'Средняя',
      completed: false,
      experience: 65
    },
    {
      id: 10,
      title: 'Задание 10: Орфография приставок',
      description: 'Правописание приставок на согласный звук',
      difficulty: 'Средняя',
      completed: false,
      experience: 60
    },
    {
      id: 11,
      title: 'Задание 11: Правописание суффиксов',
      description: 'Правописание суффиксов в разных частях речи',
      difficulty: 'Средняя',
      completed: false,
      experience: 65
    },
    {
      id: 12,
      title: 'Задание 12: Лексическая ошибка',
      description: 'Нахождение лексически несовместимых слов',
      difficulty: 'Сложная',
      completed: false,
      experience: 70
    },
    {
      id: 13,
      title: 'Задание 13: Синонимичные конструкции',
      description: 'Нахождение синонимичных конструкций',
      difficulty: 'Средняя',
      completed: false,
      experience: 55
    },
    {
      id: 14,
      title: 'Задание 14: Правописание Н и НН',
      description: 'Правописание Н и НН в разных частях речи',
      difficulty: 'Средняя',
      completed: false,
      experience: 60
    },
    {
      id: 15,
      title: 'Задание 15: Речевые ошибки',
      description: 'Нахождение и исправление речевых ошибок',
      difficulty: 'Сложная',
      completed: false,
      experience: 75
    },
    {
      id: 16,
      title: 'Задание 16: Пунктуационные ошибки',
      description: 'Нахождение и исправление пунктуационных ошибок',
      difficulty: 'Сложная',
      completed: false,
      experience: 80
    },
    {
      id: 17,
      title: 'Задание 17: Видо-временные формы глагола',
      description: 'Определение и правописание видо-временных форм',
      difficulty: 'Средняя',
      completed: false,
      experience: 60
    },
    {
      id: 18,
      title: 'Задание 18: Причастие и деепричастие',
      description: 'Правописание и грамматические особенности',
      difficulty: 'Средняя',
      completed: false,
      experience: 65
    },
    {
      id: 19,
      title: 'Задание 19: Сложные слова',
      description: 'Правописание сложных слов и соединительных гласных',
      difficulty: 'Средняя',
      completed: false,
      experience: 55
    }
  ]);

  const difficultyColors = {
    'Легкая': '#4CAF50',
    'Средняя': '#FFC107',
    'Сложная': '#F44336'
  };

  return (
    <div className="task-selector">
      <div className="container">
        <h2>Выбери задание ЕГЭ</h2>
        <p>Практикуйся по каждому из 19 заданий ЕГЭ по русскому языку</p>
        
        <div className="tasks-grid">
          {tasks.map(task => (
            <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
              <div className="task-header">
                <div className="task-id">Задание {task.id}</div>
                <div 
                  className="difficulty"
                  style={{ backgroundColor: difficultyColors[task.difficulty] }}
                >
                  {task.difficulty}
                </div>
              </div>
              
              <h3>{task.title}</h3>
              <p className="task-description">{task.description}</p>
              
              <div className="task-footer">
                <div className="experience">+{task.experience} опыта</div>
                <Link to={`/task/${task.id}`} className="button">
                  {task.completed ? 'Повторить' : 'Начать'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSelector;