import React, { useState } from "react"

import useTable from "../../hooks/useTable"
import styles from "./Table.module.css"
import TableFooter from "./TableFooter"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Table = ({ data, message, rowsPerPage }) => {
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(data, page, rowsPerPage)

  const exportData = () => {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("tblStocks");
  
    /* Declaring array variable */
    var rows =[];
  
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        var column1 = row.cells[0].innerText;
        var column2 = row.cells[1].innerText;
        var column3 = row.cells[2].innerText;
  
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
            ]
        );
  
        }
        var csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
  
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Report.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
  }

  return (
    <>
      <button className={styles.productAdd}>Add Product</button>
      {
        message === "product" ? (
          <table id="tblStocks" className={styles.table}>
            <thead className={styles.tableRowHeader}>
              <tr>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Description</th>
                <th className={styles.tableHeader}>Buy price</th>
                <th className={styles.tableHeader}>Sell price</th>
                <th className={styles.tableHeader}></th>
                <th className={styles.tableHeader}></th>
              </tr>
            </thead>
            <tbody>
              {slice.map((el) => (
                <tr className={styles.tableRowItems} key={el.id}>
                  <td className={styles.tableCell}>{el.name}</td>
                  <td className={styles.tableCell}>{el.description}</td>
                  <td className={styles.tableCell}>{el.buy_price}</td>
                  <td className={styles.tableCell}>{el.sell_price}</td>
                  <td className={styles.tableCell}><button className={styles.productDel}><EditIcon /></button></td>
                  <td className={styles.tableCell}><button className={styles.productDel}><DeleteIcon /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ):null
      }
      {
        message === "sell" ? (
          <table id="tblStocks" className={styles.table}>
            <thead className={styles.tableRowHeader}>
              <tr>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Description</th>
                <th className={styles.tableHeader}>Buy price</th>
                <th className={styles.tableHeader}>Sell price</th>
                <th className={styles.tableHeader}></th>
                <th className={styles.tableHeader}></th>
              </tr>
            </thead>
            <tbody>
              {slice.map((el) => (
                <tr className={styles.tableRowItems} key={el.id}>
                  <td className={styles.tableCell}>{el.name}</td>
                  <td className={styles.tableCell}>{el.description}</td>
                  <td className={styles.tableCell}>{el.buy_price}</td>
                  <td className={styles.tableCell}>{el.sell_price}</td>
                  <td className={styles.tableCell}><button className={styles.productDel}><EditIcon /></button></td>
                  <td className={styles.tableCell}><button className={styles.productDel}><DeleteIcon /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ):null
      }
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <button className={styles.reportGenerate} onClick={exportData}>
        Generate Report
      </button>
    </>
  );
};

export default Table
