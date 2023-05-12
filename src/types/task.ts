export type IError = {
  row: number,
  col: number,
  error: string
}

export type DynamicObject = {
  [key: string]: string | number;
};

export interface ITask {
  filename: string
  mapping: object,
  status: 'pending' | 'processing' | 'done',
  data?: DynamicObject[],
  errors?: number,
  errorRows?: IError[],
  createdAt: Date,
  updatedAt: Date
}

type CellValue = number | string;

export type Row = CellValue[] 
