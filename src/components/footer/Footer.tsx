import { Flex, NavLink, Text } from '@mantine/core'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer>
      <Flex m={'auto'} w={'90%'} h={'60px'} mt={'60px'} justify={'space-between'} align={'center'} style={{borderTop: '1px solid gray'}}>
        <Text c={'white'}>Special for Mindbox</Text>
        <NavLink target='_blank' href='https://github.com/SenpaiSun/Mindbox-test' label='GitHub'  w={'max-content'}/>
      </Flex>
    </footer>
  )
}
