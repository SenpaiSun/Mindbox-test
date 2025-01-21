import { Flex, Title } from '@mantine/core';
import React from 'react';
import { ToDoList } from '../../components/toDoList/ToDoList';

export const Main: React.FC = () => {
  return (
    <main style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Flex mt={'30px'} w={'90%'} h={'100%'} justify={'center'} align={'center'} direction={'column'} gap={'40px'}>
        <Title order={1} c={'white'}>ToDo List</Title>
        <ToDoList />
      </Flex>
    </main>
  );
};
