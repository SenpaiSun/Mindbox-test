export interface TaskProps {
  number: number
  date: string
  description: string
  status: 'Done' | 'Pending'
}

export interface CellProps {
  data: TaskProps[]
  selectedStatuses: string[]
  handleStatusChange: (status: string) => void
  deleteCompletedTasks: () => void
  hasCompletedTasks: boolean
  changeStatusToDone: (rows: number[]) => void
}

export interface InputProps {
  addTask: (description: string) => void
}
