import React, { useEffect } from 'react'
import Select from 'react-select'

export default function EditProduct(props){

    const data = {
        'name': props.val.name,
        'buy_price': props.val.buy_price,
        'sell_price': props.val.sell_price,
        'description': props.val.description,
        'catogory_id': props.val.catogory_id,
    }

    useEffect(() => {
      console.log(data)
    })

    const options = [
        { value: 1, label: 'Đồ gỗ' },
    ]

    const handleChange = (selected) => {
        data['catogory_id'] = selected.value
    }

    const filterOption = (value) => options.filter(e => e.value === value)

    return (
      <form style={{ height: 470, width: '96%', margin: 2 + "%"}}>
        <h3>Edit Product</h3>

        <div className="mb-3">
          <label>Category</label>
          <Select options = {options} onChange={handleChange} defaultValue={filterOption(data['catogory_id'])} />
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {data['name'] = e.target.value}}
            defaultValue={data['name']}
          />
        </div>

        <div className="mb-3">
          <label>Buy price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            onChange={(e) => {data['buy_price'] = e.target.value}}
            defaultValue={data['buy_price']}
          />
        </div>

        <div className="mb-3">
          <label>Sell price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            onChange={(e) => {data['sell_price'] = e.target.value}}
            defaultValue={data['sell_price']}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {data['description'] = e.target.value}}
            defaultValue={data['description']}
          />
        </div>

        <div className="d-grid">
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={() => {}}
          >
            Submit
          </button>
        </div>
      </form>
    )
}