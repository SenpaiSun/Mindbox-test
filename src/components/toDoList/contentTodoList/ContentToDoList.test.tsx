import { MantineProvider } from '@mantine/core'
import { fireEvent, render, screen } from '@testing-library/react'
import { ContentToDoList } from './ContentToDoList'
import { TaskProps } from '../types'

test('complete and delete task', () => {
  const mockChangeStatusToDone = jest.fn()
  const mockHandleStatusChange = jest.fn()
  const mockDeleteCompletedTasks = jest.fn()

  const task: TaskProps[] = [{ number: 1, date: '01.01.2025', description: 'Task 1', status: 'Pending' }]
  render(
    <MantineProvider>
      <ContentToDoList data={task} selectedStatuses={['Pending']} handleStatusChange={mockHandleStatusChange} deleteCompletedTasks={mockDeleteCompletedTasks} hasCompletedTasks={false} changeStatusToDone={mockChangeStatusToDone} />
    </MantineProvider>
  )

 expect(screen.getByText('Task 1')).toBeInTheDocument();

 const checkbox = screen.getByTestId('checkbox-1');
 fireEvent.click(checkbox);

 const checkButton = screen.getByTestId('check-button');
 fireEvent.click(checkButton);

 const deleteButton = screen.getByTestId('delete-button');
 fireEvent.click(deleteButton);

 expect(mockChangeStatusToDone).toHaveBeenCalledWith([1]);
})
