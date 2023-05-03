import * as React from 'react'
import Table from '../../components/Table'
import { get_product } from '../../services/user'

export default function Product() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fetch(){
      await get_product().then(
        (res) => {
          setData(res.data["product"])
          console.log(res.data["product"])
        }
      ).catch((error) => console.log(error))
    }
    fetch()
  }, [])

  return (
    <div style={{ height: 400, width: '96%', margin: 2 + "%"}}>
        <Table data={data} rowsPerPage={4} message={"product"} />
    </div>
  );
}