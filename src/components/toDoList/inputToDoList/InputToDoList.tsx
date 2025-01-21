import { Button, CloseButton, Flex, Input } from '@mantine/core'
import React from 'react'
import { InputProps } from '../types'

export const InputToDoList: React.FC<InputProps> = ({ data, addTask }) => {
  const [value, setValue] = React.useState<string>('')

  return (
    <Flex direction={{ sm: 'row', base: 'column' }} w={'100%'} gap={'10px'} align={'center'} style={{ borderBottom: '1px solid gray' }} pb={'10px'}>
      <Input miw={'200px'} w={'100%'} placeholder='Write your task' value={value} onChange={(e) => setValue(e.target.value)} rightSectionPointerEvents='all' rightSection={<CloseButton onClick={() => setValue('')} style={{ display: value ? 'block' : 'none' }} />} />
      <Button
        miw={'90px'}
        w={'100px'}
        onClick={() => {
          addTask(data, value)
          setValue('')
        }}
      >
        Create
      </Button>
    </Flex>
  )
}
