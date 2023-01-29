import { Table as BTable } from 'react-bootstrap'
import React from 'react'

/** テーブル */
function Table() {
  return (
    <BTable>
      <thead>
        <tr>
          <th>No</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>hoge</td>
        </tr>
        <tr>
          <td>2</td>
          <td>fuga</td>
        </tr>
      </tbody>
    </BTable>
  )
}

export default Table
