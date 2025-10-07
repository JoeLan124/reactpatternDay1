"use client"

import { useRef, useState } from "react"

const ContactUnConWithRef = () => {
  const nameInputRef = useRef()
  const addressInputRef = useRef()
  const emailInputRef = useRef();
  const questionInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameInputRef.current.value.trim()
    const address = addressInputRef.current.value.trim()
        const email =
          emailInputRef.current.value.trim();
        const question =
          questionInputRef.current.value.trim();

    if (!name) {
      alert('Name is required')
      return
    }


    if (!address) {
      alert("Address is required");
      return;
    }


    if (!email) {
      alert("Email is required");
      return;
    }


    if (!question) {
      alert("Your Question please");
      return;
    }
    console.log("name: ", name, "address: ", address, "email: ", email, "question: ", question)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-96 space-y-3">
        <h1>Contact Form uncontrolled with Refs</h1>
        <div className="flex">
          <label className="w-36">Name: </label>
          <input
            type="text"
            name="name"
            ref={nameInputRef}
          
            className="bg-green-200 rounded-2xl ml-2 px-2 text-black"
          />
        </div>
        <div className="flex">
          <label className="w-36">Address: </label>
          <input
            type="text"
            name="address"
            ref={addressInputRef}
         
            className="bg-green-200 rounded-2xl ml-2 px-2 text-black"
          />
        </div>
        <div className="flex">
          <label className="w-36">Email: </label>
          <input
            type="email"
            name="email"
            ref={emailInputRef}
     
            className="bg-green-200 rounded-2xl ml-2 px-2 text-black"
          />
        </div>
        <div className="flex">
          <label className="w-36 h-48">Your Question: </label>
          <textarea          
            name="email"
            rows={4}
            ref={questionInputRef}

            
            className="bg-green-200 rounded-2xl ml-2 pl-2 py-2 text-black"
          />
        </div>
      </div>
      <button
        className="m-4 p-4 rounded-3xl bg-green-300 text-black"
        type="submit">
        Send
      </button>
    </form>
  );
}
export default ContactUnConWithRef