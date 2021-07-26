import React from "react"

const TableContent = props => {
//   console.log("TableContent", props)
  return (
    <div className="block w-full sm:w-auto m-auto">
      <table className="blog-table relative table-fixed font-custom bg-white text-grayColor-custom">
        <tbody>
          {props.data.rows.map((row, l_index) => {
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
    </div>
  )
}

export default TableContent
