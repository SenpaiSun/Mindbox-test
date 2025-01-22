import { render, screen, fireEvent } from '@testing-library/react'
import { InputToDoList } from './InputToDoList'
import { MantineProvider } from '@mantine/core'

test('add new task', () => {
  const mockAddTask  = jest.fn()
  render(
    <MantineProvider>
      <InputToDoList addTask={mockAddTask} />
    </MantineProvider>
  )

  const input = screen.getByPlaceholderText('Write your task')
  fireEvent.change(input, { target: { value: 'New task' } })

  const button = screen.getByText('Create')
  fireEvent.click(button)

  expect(mockAddTask).toHaveBeenCalledWith('New task')
})
