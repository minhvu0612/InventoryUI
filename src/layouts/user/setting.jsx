import React from 'react'
import { update_user } from '../../services/user'

export default function Setting(){

    const data = {
      'name': '',
      'username': localStorage.getItem('username'),
      'pass': '',
      'confirm': ''
    }

    const handle = async (e) => {
      e.preventDefault()
      update_user(data).then(
        (res) => {
          if (res.data['message'] === 'success'){
            window.location.href = "/"
          }
        }
      ).catch((error) => console.log(error))
    }

    return (
      <form style={{ height: 470, width: '96%', margin: 2 + "%"}}>
        <h3>Setting</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            defaultValue={localStorage.getItem("name")}
            onChange={(e) => {data['name'] = e.target.value}}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {data['pass'] = e.target.value}}
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            onChange={(e) => {data['confirm'] = e.target.value}}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handle}>
            Submit
          </button>
        </div>
      </form>
    )
}