import React from "react"

const TableContent = props => {
  return (
    <div className="w-full sm:w-auto m-auto">
      <table className="hidden sm:block blog-table relative table-fixed font-custom bg-white text-grayColor-custom">
        <thead>
          {props.data.table_header.map(header => {
            return (
              <th key={header} className={`p-4 text-base font-bold text-left`}>
                {header}
              </th>
            )
          })}
        </thead>
        <tbody>
          {props.data.Table.rows.map((row, l_index) => {
            return (
              <tr
                key={l_index}
                className={`${
                  l_index % 2 === 0
                    ? "bg-grayColor-BgGray"
                    : "bg-whiteColor-custom"
                }`}
              >
                {row.cells.map((cell, cIdx) => {
                  return (
                    <td
                      key={cIdx}
                      className="p-4 text-base font-medium text-left"
                    >
                      {cell}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mobile-table font-custom">
        {props.data.table_header.map((header, idx) => {
          return (
            <div key={header} className={`text-base text-left my-4`}>
              <div className="font-bold p-4">{header}</div>
              <div>
                {props.data.Table.rows.map((row, l_index) => {
                  return (
                    <div
                      className={`${
                        l_index % 2 === 0
                          ? "bg-grayColor-BgGray"
                          : "bg-whiteColor-custom"
                      } fort-medium p-4`}
                    >
                      {row.cells[idx]}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableContent
