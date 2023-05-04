import * as React from 'react'
import Table from '../../components/Table'
import { get_sell } from '../../services/user'

export default function Sell() {
  const [data, setData] = React.useState([])
  const filterProduct = (value, arr) => arr.filter(e => e.id === value) 

  React.useEffect(() => {
    async function fetch(){
      await get_sell().then(
        (res) => {
            res.data['sell'].forEach(element => {
              element['name'] = filterProduct(element['product_id'], res.data['product'])[0].name
            })
            setData(res.data['sell'])
        }
      ).catch((error) => console.log(error))
    }
    fetch()
  }, [])

  return (
    <div style={{ height: 400, width: '96%', margin: 2 + "%"}}>
        <Table data={data} rowsPerPage={4} message={"sell"} />
    </div>
  );
}