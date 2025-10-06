// name, address, email, question
"use client"
import { useState } from "react"

const ContactControlled = () => {

  const [form, setForm] = useState({name: "", address: "", email: "", question: ""})


  const handleSubmit = (e) => {
    e.preventDefault()

  }  
  
  const handleChange = (e) => {
  
    
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

  }
    
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="m-4">Contact Form controlled</h1>
      <div className="">
        <div className="flex flex-col w-96 space-y-3">
          <label className="w-24">Name: </label>
          <div></div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
          />
          {form.name.length === 0 && (
            <h1 className="text-sm text-red-500 pl-4">
              Please add a name!
            </h1>
          )}

          <label className="w-24">Address: </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
          />
          {form.address.length === 0 && (
            <h1 className="text-sm text-red-500 pl-4">
              Please add an address!
            </h1>
          )}

          <label className="w-24">Email: </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
          />
          {form.email.length === 0 && (
            <h1 className="text-sm text-red-500 pl-4">
              Please add a valid email!
            </h1>
          )}

          <label className="w-24">My Question: </label>
          <textarea
            name="question"
            value={form.question}
            onChange={handleChange}
            rows="4"
            className="bg-blue-200 rounded-2xl ml-2 px-2 text-black"
          />
          {form.question.length === 0 && (
            <h1 className="text-sm text-red-500 pl-4">
              Please add your question!
            </h1>
          )}
        </div>
      </div>
      <button
        className="m-4 bg-blue-400 p-4 rounded-3xl"
        type="submit">
        Submit
      </button>
    </form>
  );
}
export default ContactControlled