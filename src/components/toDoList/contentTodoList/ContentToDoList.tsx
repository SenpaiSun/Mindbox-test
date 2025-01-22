import { ActionIcon, Checkbox, Flex, Menu, Table, Text } from '@mantine/core';
import React, { useState } from 'react';
import { CellProps } from '../types';

export const ContentToDoList: React.FC<CellProps> = ({
  data,
  selectedStatuses,
  handleStatusChange,
  deleteCompletedTasks,
  hasCompletedTasks,
  changeStatusToDone,
}) => {
  const filteredData = data.filter((element) => selectedStatuses.includes(element.status));
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = filteredData.map((element) => (
    <Table.Tr key={element.number}>
      <Table.Td>
        {element.status === 'Pending' && (
          <Checkbox
            aria-label="Select row"
            data-testid={`checkbox-${element.number}`}
            checked={selectedRows.includes(element.number)}
            onChange={(event) =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, element.number]
                  : selectedRows.filter((number) => number !== element.number)
              )
            }
          />
        )}
      </Table.Td>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td c={element.status === 'Pending' ? 'blue' : 'green'}>{element.date}</Table.Td>
      <Table.Td
        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
        maw={'247px'}
        c={element.status === 'Pending' ? 'blue' : 'green'}
        td={element.status === 'Pending' ? 'none' : 'line-through'}
      >
        {element.description}
      </Table.Td>
      <Table.Td c={element.status === 'Pending' ? 'blue' : 'green'}>{element.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex w={'100%'} justify={'center'} style={{ maxHeight: '70vh', overflow: 'auto' }}>
      {data.length ? (
        <Table style={{ width: '100%', tableLayout: 'fixed' }}>
          <Table.Thead pos={'sticky'} bg={'gray'} top={0}>
            <Table.Tr>
              <Table.Th>
                <Flex gap={'4px'}>
                  <ActionIcon
                    onClick={() => {
                      changeStatusToDone(selectedRows);
                      setSelectedRows([]);
                    }}
                    disabled={selectedRows.length ? false : true}
                    size={'20px'}
                    color="green"
                    data-testid="check-button"
                  >
                    ✓
                  </ActionIcon>
                  <ActionIcon
                    p={'2px'}
                    ta={'center'}
                    onClick={deleteCompletedTasks}
                    disabled={!hasCompletedTasks}
                    size={'max-content'}
                    color="red"
                    style={{ fontSize: '10px' }}
                    data-testid="delete-button"
                  >
                    Delete completed tasks
                  </ActionIcon>
                </Flex>
              </Table.Th>
              <Table.Th>Number</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>
                <Menu position="bottom" withArrow>
                  <Menu.Target>
                    <ActionIcon w={'max-content'} variant="default" p={'4px'} style={{ cursor: 'pointer' }}>
                      <Text>▼ Status{selectedStatuses.length ? ` (${selectedStatuses.length})` : '(0)'}</Text>
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Filter by Status</Menu.Label>
                    <Menu.Item>
                      <Checkbox
                        label="Done"
                        checked={selectedStatuses.includes('Done')}
                        onChange={() => handleStatusChange('Done')}
                      />
                    </Menu.Item>
                    <Menu.Item>
                      <Checkbox
                        label="Pending"
                        checked={selectedStatuses.includes('Pending')}
                        onChange={() => handleStatusChange('Pending')}
                      />
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : (
        <Text>Create your first task...</Text>
      )}
    </Flex>
  );
};