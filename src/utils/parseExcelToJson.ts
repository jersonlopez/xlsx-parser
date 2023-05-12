import { DynamicObject, IError, Row } from "../types/task";

export const parseExcelToJson = (rows: Row[], mapping: object) => {
  const mappingTypes = Object.values(mapping).map((column) => Object.values(column));

  // Remove the header row
  rows.shift();

  return rows.reduce(
    (acc: {data: DynamicObject[], errors: IError[]}, row: Row, rowIndex: number) => {
      const success: DynamicObject = {};
      const errors: IError[] = [];
      mappingTypes.forEach((column, index) => {
        const [name, type] = column;

        if (typeof row[index] === type) {
          success[`${name}`] = row[index];
        } else {
          errors.push({ row: rowIndex + 2, col: index, error: `'${row[index]}' must be a ${type}` });
        }
      });

      errors.length ? acc.errors.push(...errors) : acc.data.push(success);

      return acc;
    },
    { data: [], errors: [] },
  );
};
