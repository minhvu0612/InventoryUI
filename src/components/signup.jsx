import React, { useState } from 'react'
import { create_user } from '../services/user'

export default function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

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
      if (username !== "" && password !== "" && name !== ""){
        const data = {
          "name": name,
          "username": username,
          "password": password,
          "avatar": "url",
          "group_id": 1
        }
        await create_user(data).then(
          (res) => {
            if (res.data["message"] === 200){
              handleSave(res)
              window.location.href = "/"
            }
            else{
              alert("server error")
            }
          }
        )
        .catch((error) => console.log(error))
      }
    }

    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handle}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
}
