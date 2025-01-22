import { MantineProvider } from '@mantine/core'
import { fireEvent, render, screen } from '@testing-library/react'
import { ContentToDoList } from './ContentToDoList'
import { TaskProps } from '../types'

test('complete and delete task', () => {
  const mockChangeStatusToDone = jest.fn()
  const mockHandleStatusChange = jest.fn()
  const mockDeleteCompletedTasks = jest.fn()

  // Создаем мок данных
  const task: TaskProps[] = [{ number: 1, date: '01.01.2025', description: 'Task 1', status: 'Pending' }]
  render(
    <MantineProvider>
      <ContentToDoList data={task} selectedStatuses={['Pending']} handleStatusChange={mockHandleStatusChange} deleteCompletedTasks={mockDeleteCompletedTasks} hasCompletedTasks={false} changeStatusToDone={mockChangeStatusToDone} />
    </MantineProvider>
  )

  // Проверяем, что задача отображается в таблице
  expect(screen.getByText('Task 1')).toBeInTheDocument()

  // Ищем чек-бокс и нажимаем на него
  const checkbox = screen.getByTestId('checkbox-1')
  fireEvent.click(checkbox)

  // Ищем кнопку выполнения задач и нажимаем на нее
  const checkButton = screen.getByTestId('check-button')
  fireEvent.click(checkButton)

  // Ищем кнопку удаления задач и нажимаем на нее
  const deleteButton = screen.getByTestId('delete-button')
  fireEvent.click(deleteButton)

  // Проверяем, что функция работает
  expect(mockChangeStatusToDone).toHaveBeenCalledWith([1])
})
