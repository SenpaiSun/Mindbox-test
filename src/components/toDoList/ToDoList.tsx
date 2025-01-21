import { Flex } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { InputToDoList } from './inputToDoList/InputToDoList'
import { ContentToDoList } from './contentTodoList/ContentToDoList'
import { TaskProps } from './types'

export const ToDoList: React.FC = () => {
  const [data, setData] = useState<TaskProps[]>(() => {
    const storedData = localStorage.getItem('tasks')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    const storedData = localStorage.getItem('tasks')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data))
  }, [data])

  const changeStatusToDone = (rows: number[]) => {
    const updatedData = data.map((task) =>
      rows.includes(task.number) ? { ...task, status: 'Done' } : task
    );
    setData(updatedData);
  }

  const addTask = (data: TaskProps[], description: string) => {
    const newTask: TaskProps = {
      number: data.length + 1,
      date: new Date().toLocaleDateString(),
      description,
      status: 'Pending',
    }
    const updatedData = [...data, newTask];
    setData(updatedData);
  }

  return (
    <Flex direction={'column'} miw={'387px'} bd={'1px solid gray'} maw={'50%'} w={'100%'} p={'10px'} style={{ borderRadius: '10px' }} gap={'10px'} align={'center'}>
      <InputToDoList data={data} addTask={addTask} />
      <ContentToDoList changeStatusToDone={changeStatusToDone} data={data} />
    </Flex>
  )
}
