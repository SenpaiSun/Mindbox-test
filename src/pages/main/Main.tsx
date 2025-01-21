import { Flex, Title } from '@mantine/core';
import React from 'react';
import { ToDoList } from '../../components/toDoList/ToDoList';

export const Main: React.FC = () => {
  return (
    <main style={{ width: '100%',minHeight: '70vh', height: '100%'}}>
      <Flex m={'30px auto 0'} w={'90%'} maw={'50%'} h={'100%'} justify={'center'} align={'center'} direction={'column'} gap={'40px'}>
        <Title order={1} c={'white'}>ToDo List</Title>
        <ToDoList />
      </Flex>
    </main>
  );
};
