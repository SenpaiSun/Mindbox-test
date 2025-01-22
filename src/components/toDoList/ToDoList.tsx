import { Flex } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { InputToDoList } from './inputToDoList/InputToDoList';
import { ContentToDoList } from './contentTodoList/ContentToDoList';
import { TaskProps } from './types';

export const ToDoList: React.FC = () => {
  const [data, setData] = useState<TaskProps[]>(() => {
    const storedData = localStorage.getItem('tasks');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['Done', 'Pending']);

  useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  // Функция для изменения статуса задач
  const changeStatusToDone = (rows: number[]) => {
    const updatedData = data.map((task) =>
      rows.includes(task.number) ? { ...task, status: 'Done' as const } : task
    );
    setData(updatedData);
  };

  // Присваимаем новый номер
  const addTask = (description: string) => {
    let newNumber = data.length + 1;

  // Проверяем, если такой номер уже существует, увеличиваем до тех пор, пока не найдем уникальный
  while (data.some(task => task.number === newNumber)) {
    newNumber += 1;
  }
  // Создаем новую задачу
  const newTask: TaskProps = {
    number: newNumber,
    date: new Date().toLocaleDateString(),
    description,
    status: 'Pending',
  };

  // Обновляем данные
  const updatedData = [...data, newTask];
  setData(updatedData);
  };

  // Функция для обработки изменения статуса
  const handleStatusChange = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  // Функция для удаления выполненных задач
  const deleteCompletedTasks = () => {
    const updatedTasks = data.filter((task) => task.status !== 'Done');
    setData(updatedTasks);
  };

  // Проверяем наличие выполненных задач
  const hasCompletedTasks = data.some((task) => task.status === 'Done');

  return (
    <Flex direction={'column'} miw={'600px'} bd={'1px solid gray'} w={'100%'} p={'10px'} style={{ borderRadius: '10px' }} gap={'10px'} align={'center'}>
      <InputToDoList addTask={addTask} />
      <ContentToDoList
        data={data}
        selectedStatuses={selectedStatuses}
        handleStatusChange={handleStatusChange}
        deleteCompletedTasks={deleteCompletedTasks}
        hasCompletedTasks={hasCompletedTasks}
        changeStatusToDone={changeStatusToDone}
      />
    </Flex>
  );
};