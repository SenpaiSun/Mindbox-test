import { render, screen, fireEvent } from '@testing-library/react'
import { InputToDoList } from './InputToDoList'
import { MantineProvider } from '@mantine/core'

test('add new task', () => {
  const mockAddTask = jest.fn()
  render(
    <MantineProvider>
      <InputToDoList addTask={mockAddTask} />
    </MantineProvider>
  )

  // Проверяем, что поле ввода есть и вводим туда текст
  const input = screen.getByPlaceholderText('Write your task')
  fireEvent.change(input, { target: { value: 'New task' } })

  // Проверяем, что кнопка создания задачи есть и создаем с ее помощью задачу
  const button = screen.getByText('Create')
  fireEvent.click(button)

  // Проверяем, что функция addTask была вызвана
  expect(mockAddTask).toHaveBeenCalledWith('New task')
})
