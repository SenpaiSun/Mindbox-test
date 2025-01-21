import { render, screen, fireEvent } from '@testing-library/react'
import { InputToDoList } from './InputToDoList'
import { MantineProvider } from '@mantine/core'

test('add new task', () => {
  const mockData = jest.fn()
  render(
    <MantineProvider>
      <InputToDoList data={[]} addTask={mockData} />
    </MantineProvider>
  )

  const input = screen.getByPlaceholderText('Write your task')
  fireEvent.change(input, { target: { value: 'New task' } })

  const button = screen.getByText('Create')
  fireEvent.click(button)

  expect(mockData).toHaveBeenCalledWith([], 'New task')
})
