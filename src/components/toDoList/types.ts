export interface TaskProps {
  number: number
  date: string
  description: string
  status: string
}

export interface CellProps {
  data: TaskProps[]
  changeStatusToDone: (rows:number[], data:TaskProps[]) =>  void
}

export interface InputProps {
  data: TaskProps[]
  addTask: (data:TaskProps[], description: string) => void
}