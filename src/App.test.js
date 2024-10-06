import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

// Тест рендера калькулятора
test('Отображение калькулятора и всех кнопок', () => {
  render(<App />);
  
  // Проверка наличия основных элементов
  expect(screen.getByText('Калькулятор')).toBeInTheDocument();
  
  // Проверка кнопок с числами
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '='].forEach(button => {
    expect(screen.getByText(button)).toBeInTheDocument();
  });

  // Проверка кнопки сброса
  expect(screen.getByText('С')).toBeInTheDocument();
});

// Тест ввода чисел
test('Ввод чисел в дисплей', () => {
  render(<App />);
  
  const button1 = screen.getByText('1');
  const button2 = screen.getByText('2');
  const display = screen.getByText('0');

  // Нажимаем кнопки 1 и 2
  fireEvent.click(button1);
  fireEvent.click(button2);

  // Проверяем, что отображается "12"
  expect(display.textContent).toBe('12');
});

// Тест сложения
test('Выполнение операции сложения', () => {
  render(<App />);

  const button1 = screen.getByText('1');
  const button2 = screen.getByText('2');
  const plusButton = screen.getByText('+');
  const equalsButton = screen.getByText('=');
  const display = screen.getByText('0');

  // Нажимаем 1 + 2 =
  fireEvent.click(button1);
  fireEvent.click(plusButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  // Проверяем результат
  expect(screen.getByText('= 3')).toBeInTheDocument();
});

// Тест сброса
test('Сброс экрана при нажатии кнопки "С"', () => {
  render(<App />);

  const button1 = screen.getByText('1');
  const clearButton = screen.getByText('С');
  const display = screen.getByText('0');

  // Нажимаем кнопку 1
  fireEvent.click(button1);

  // Проверяем, что на экране "1"
  expect(display.textContent).toBe('1');

  // Нажимаем кнопку сброса
  fireEvent.click(clearButton);

  // Проверяем, что экран вернулся к "0"
  expect(display.textContent).toBe('0');
});

// Тест ограничения длины ввода
test('Ограничение ввода на дисплее до 12 символов', () => {
  render(<App />);

  const button9 = screen.getByText('9');
  const display = screen.getByText('0');

  // Нажимаем кнопку "9" 13 раз
  for (let i = 0; i < 13; i++) {
    fireEvent.click(button9);
  }

  // Проверяем, что отображается только 12 символов
  expect(display.textContent.length).toBe(12);
});
