import React from 'react'
import Select from 'react-select'
import { add_product } from '../../services/user'

export default function AddProduct(){

    const data = {
        'name': '',
        'buy_price': '',
        'sell_price': '',
        'description': '',
        'catogory_id': 1,
    }

    const options = [
        { value: 1, label: 'Đồ gỗ' },
    ]

    const handleChange = (selected) => {
        data['catogory_id'] = selected.value
    }

    const handleAdd = async (e) => {
      e.preventDefault()
      add_product(data).then(
        (res) => {
          if (res.data['message'] === 'success'){
            window.location.href = "/"
          }
        }
      ).catch((error) => console.log(error))
    }

    return (
      <form style={{ height: 470, width: '96%', margin: 2 + "%"}}>
        <h3>Add Product</h3>

        <div className="mb-3">
          <label>Category</label>
          <Select options = {options} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => {data['name'] = e.target.value}}
          />
        </div>

        <div className="mb-3">
          <label>Buy price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            onChange={(e) => {data['buy_price'] = e.target.value}}
          />
        </div>

        <div className="mb-3">
          <label>Sell price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            onChange={(e) => {data['sell_price'] = e.target.value}}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter content"
            onChange={(e) => {data['description'] = e.target.value}}
          />
        </div>

        <div className="d-grid">
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleAdd}
          >
            Submit
          </button>
        </div>
      </form>
    )
}
