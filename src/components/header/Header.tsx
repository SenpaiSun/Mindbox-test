import React from 'react'
import { Flex, Title } from '@mantine/core'

export const Header: React.FC = () => {
  return (
    <header style={{ width: '100%', height: '50px', borderBottom: '1px solid gray', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
      <Flex>
        <Title size={'xl'} order={1} c={'white'} ml={'10px'}>
          Mindbox-ToDo List
        </Title>
      </Flex>
    </header>
  )
}
