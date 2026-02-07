"use client"

import { useState } from "react"
import Memoization from "./components/BrokenMemoization/page"
import ProductCard from "./components/ProductCard"
import CountrySelector from "./components/CountrySelector/page"

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>("")

  return (
    <div className="p-8 space-y-8">
      <Memoization />
      <ProductCard price={12} />
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Country Selector</h2>
        <CountrySelector onCountryChange={setSelectedCountry} />
        {selectedCountry && (
          <p className="text-sm text-muted-foreground">
            Selected country: <strong>{selectedCountry}</strong>
          </p>
        )}
      </div>
    </div>
  )
}
