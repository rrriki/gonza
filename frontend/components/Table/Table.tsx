import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import * as _ from "lodash";

interface TableProps {
  columns: string[];
  rows: Array<{ [header: string]: string | number }>;
}
export const Table: React.FC<TableProps> = (props) => {
  const {columns, rows } = props;

  return (
    <BootstrapTable striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((column: string, i) => (
              <td key={i}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};
