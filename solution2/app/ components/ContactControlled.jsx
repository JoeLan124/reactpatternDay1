// name, address, email, question
"use client"
import { useState } from "react"

const ContactControlled = () => {

const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [email, setEmail] = useState("")
const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(name)
  }  
    
    return (
        <form onSubmit={handleSubmit}>
        <h1 className="m-4">Contact Form controlled</h1>
        <div className="">
          <div className="flex flex-col w-96 space-y-3">
            <label className="w-24">Name: </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
            />
            <label className="w-24">Address: </label>
            <input
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
            />

            <label className="w-24">Email: </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
            />

            <label className="w-24">My Question: </label>
            <textarea
              type="text"
                        name="question"
                        rows="4"
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
            />
          </div>
            </div>
            <button className="m-4 bg-blue-400 p-4 rounded-3xl" onSubmit={handleSubmit}>Submit</button>
      </form>
    );
}
export default ContactControlled