# Best Student Finder

## Описание

Функция для поиска лучшего студента из массива данных. Критерии:

1. Максимальный балл (score)
2. При равных баллах - более ранняя дата сдачи (date)

## Запуск

```bash
# Установка зависимостей
npm install

# Запуск тестов
npm test

# Запуск с покрытием кода
npm run test:coverage
```

## Использование

```javascript
const findBestStudent = require("./points");

const students = [
  { name: "Ivan", score: 35, date: "2022-10-11" },
  { name: "Maria", score: 35, date: "2022-10-10" },
];

const best = findBestStudent(students);
// Вернет Maria (та же оценка, но более ранняя дата)
```

## Покрытие кода

- **Инструмент**: Jest
- **Что измеряем**: покрытие строк, функций, ветвлений
- **Отчеты**: HTML отчет в `coverage/lcov-report/index.html`
- **Минимальный порог**: настраивается в `package.json`
