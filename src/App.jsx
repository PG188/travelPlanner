import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }
  return (
    <>
      <div>
        <h1>Travellers</h1>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone Number</th>
          </tr>
          <tr onSubmit={handleSubmit} className="new-item-form">
            <th><input type="text" id="firstName"></input></th>
            <th><input type="text" id="lastName"></input></th>
            <th><input type="email" id="eMail"></input></th>
            <th><input type="tel" id="phoneNumber"></input></th>
            <td><button className="btn">Add</button></td>
          </tr>
          <tr>
            <td>test</td>
            <td>this</td>
            <td>tsdfs@j.com</td>
            <td>235-435-4544</td>
            <td><button className="btn">View</button></td>
          </tr>
          <tr>
            <td>test</td>
            <td>this</td>
            <td>tsdfs@j.com</td>
            <td>235-435-4544</td>
            <td><button className="btn">View</button></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
