import React, { useState } from 'react'
import { get_user } from '../services/user'

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSave = (res) => {
      localStorage.setItem("name", res.data["name"])
      localStorage.setItem("avatar", res.data["avatar"])
      localStorage.setItem("username", res.data["username"])
      localStorage.setItem("password", res.data["password"])
      localStorage.setItem("id", res.data["id"])
      localStorage.setItem("group_id", res.data["group_id"])
    }

    const handle = async (e) => {
      e.preventDefault()
      if (username !== "" && password !== ""){
        await get_user(username, password)
        .then(
          (res) => {
            if (res.data["message"] === "success"){
              handleSave(res)
              window.location.href = "/"
            }
            else{
              alert("username or password invalid")
            }
          }
        )
        .catch((error) => console.log(error))
      }
    }
    return (
      <form>
        <h3>Log In</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handle}
          >
            Submit
          </button>
        </div>
      </form>
    )
}
