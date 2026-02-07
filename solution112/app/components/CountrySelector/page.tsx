"use client"

import { useState } from "react"
import { countries } from "./countries"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

type CountrySelectorProps = {
  onCountryChange?: (country: string) => void
}

const CountrySelector = ({ onCountryChange }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("")

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country)
    onCountryChange?.(country)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          {selectedCountry || "Select a country"}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[300px] overflow-y-auto">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country}
            onClick={() => handleCountrySelect(country)}
          >
            {country}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default CountrySelector