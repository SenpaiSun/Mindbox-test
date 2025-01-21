import { ActionIcon, Checkbox, Flex, Table, Text } from '@mantine/core'
import React from 'react'
import { CellProps } from '../types'

export const ContentToDoList: React.FC<CellProps> = ({data, changeStatusToDone}) => {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([])

  const rows = data.map((element) => (
    <Table.Tr key={element.number} >
      <Table.Td>
        {element.status === 'Pending' && <Checkbox aria-label='Select row' checked={selectedRows.includes(element.number)} onChange={(event) => setSelectedRows(event.currentTarget.checked ? [...selectedRows, element.number] : selectedRows.filter((number) => number !== element.number))} />}
      </Table.Td>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td c={element.status === 'Pending' ? 'blue' : 'green'}>{element.date}</Table.Td>
      <Table.Td style={{overflow: 'hidden', textOverflow: 'ellipsis'}} maw={'247px'} c={element.status === 'Pending' ? 'blue' : 'green'} td={element.status === 'Pending' ? 'none' : 'line-through'}>
        {element.description}
      </Table.Td>
      <Table.Td c={element.status === 'Pending' ? 'blue' : 'green'}>{element.status}</Table.Td>
    </Table.Tr>
  ))

  return (
    <Flex w={'100%'} justify={'center'}>
      {data.length ? (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <ActionIcon onClick={() => changeStatusToDone(selectedRows, data)} disabled={selectedRows.length ? false : true} size={'20px'} color='green'>
                  &#10003;
                </ActionIcon>
              </Table.Th>
              <Table.Th>Number</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : (
        <Text>Create your first task...</Text>
      )}
    </Flex>
  )
}
