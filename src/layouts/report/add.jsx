import React from 'react'

export default function AddReport(){

    const data = {
        'file': '',
        'date': 1,
    }

    return (
      <form style={{ height: 470, width: '96%', margin: 2 + "%"}}>
        <h3>Add Report</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="file"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {console.log(e.target.files)}}
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