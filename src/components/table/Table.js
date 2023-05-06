import React from "react";
import { Link } from "react-router-dom";
import "./table.css";
import { boolean } from "zod";

function Row({ column, row }) {
  const value = row[column.key];

  switch (column.type) {
    case "text":
      return <p>{value}</p>;
    case "bool":
      if(value===true){
        return <p>true</p>
      }else if(value===false){
        return <p>false</p>
      }
      return null
      
      
    case "link":
      return (
        <Link
          href={(column.payload?.to || "/")
            .toString()
            .replaceAll(":key", value)}
        >
          {column.payload?.label}
        </Link>
      );
    case "action":
      const Comp = column.payload;
      return <Comp row={row} column={column} value={value} />;
    case "date":
      return (
        <>
          {new Date(value).toLocaleString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </>
      );
    default:
      return null;
  }
}

export function Table({ columns, rows }) {
  return (
    <div className="table-responsive card">
      <table className="table table-borderless ">
        <thead className=" bg-table-th ">
          <tr className="border-bottom">
            <th className="">
              <span className="col">#</span>
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                align={column.align}
                sx={{ color: "#667085" }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => {
            return (
              <tr
                className="border-bottom"
                hover
                role="checkbox"
                tabIndex={-1}
                key={row._id}
              >
                <td className="col ">
                  <div className="p-2 ">
                    <span className="">{index + 1}</span>
                  </div>
                </td>
                {columns.map((column) => {
                  return (
                    <td
                      className="col"
                      key={column.key}
                      align={column.align}
                      sx={{ py: 4 }}
                    >
                      <Row column={column} row={row} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
