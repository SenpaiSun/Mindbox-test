import { MantineProvider } from '@mantine/core'
import { fireEvent, render, screen } from '@testing-library/react'
import { ContentToDoList } from './ContentToDoList'

test('delete task', () => {
  const mockData = jest.fn()
  const task = [{ number: 1, date: '01.01.2025', description: 'Task 1', status: 'Pending' }]
  render(
    <MantineProvider>
      <ContentToDoList data={task} changeStatusToDone={mockData} />
    </MantineProvider>
  )

    expect(screen.getByText('Task 1')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    const button = screen.getByText('✓');
    fireEvent.click(button)

    expect(mockData).toHaveBeenCalledWith([1], task)
})
