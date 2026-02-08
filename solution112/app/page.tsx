"use client"

import { useState } from "react"
import Memoization from "./components/BrokenMemoization/page"
import ProductCard from "./components/ProductCard"
import Form from "./Form/Form"
import ContextDemo from "./components/ContextDemo/page"

export default function Home() {


  return (
    <div className="p-8 space-y-8">
      <Memoization />
      <ProductCard price={12} />
      <Form/>
      <ContextDemo />
    </div>
  )
}
