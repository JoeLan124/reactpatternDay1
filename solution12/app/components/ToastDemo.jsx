"use client"

import { Toast, ToastContainer, showToast } from "./Toast"
import { Camera, CheckCircle, XCircle, Info } from "lucide-react"

const ToastDemo = () => {
  const handleAction = () => {
    console.log("Action clicked!")
  }

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-xl font-bold mb-4">Toast System Demo</h2>
      
      {/* 1. Direct slot-based usage */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">1. Direct Slot Usage</h3>
        <Toast 
          icon={<Camera className="w-5 h-5 text-blue-500" />}
          message="Camera notification"
          action={{ label: "View", onClick: handleAction }}
        />
      </div>

      {/* 2. Programmatic rendering with templates */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">2. Programmatic Toasts</h3>
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => showToast("success", "Operation successful!")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Show Success
          </button>
          <button 
            onClick={() => showToast("error", "Something went wrong!")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Show Error
          </button>
          <button 
            onClick={() => showToast("info", "Here's some info")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show Info
          </button>
        </div>
      </div>

      {/* Toast Container for programmatic toasts */}
      <ToastContainer />
    </div>
  )
}

export default ToastDemo
