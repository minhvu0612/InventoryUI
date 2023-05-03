import * as React from 'react'
import Table from '../../components/Table'
import countriesData from "../../data/countries"

export default function Sell() {
  const [countries] = React.useState([...countriesData])

  return (
    <div style={{ height: 400, width: '96%', margin: 2 + "%"}}>
        <Table data={countries} rowsPerPage={4} message={"sell"} />
    </div>
  );
}