"use client"

import { create } from "zustand"

// Toast Store for programmatic rendering
const useToastStore = create((set, get) => ({
  toasts: [],
  
  show: (toast) => {
    const id = Date.now()
    set((state) => ({
      toasts: [...state.toasts, { id, ...toast }]
    }))
    return id
  },
  
  dismiss: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }))
  },
  
  dismissAll: () => {
    set({ toasts: [] })
  }
}))

// Single Toast Component with slots
const Toast = ({ icon, message, action, onDismiss }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[300px]">
      {icon && <div className="flex-shrink-0">{icon}</div>}
      {message && <div className="flex-grow text-gray-800">{message}</div>}
      {action && (
        <button 
          onClick={action.onClick || action}
          className="flex-shrink-0 px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          {action.label || "Action"}
        </button>
      )}
      {onDismiss && (
        <button 
          onClick={onDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  )
}

// Toast Container - renders all active toasts
const ToastContainer = () => {
  const { toasts, dismiss } = useToastStore()
  
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          icon={toast.icon}
          message={toast.message}
          action={toast.action}
          onDismiss={() => dismiss(toast.id)}
        />
      ))}
    </div>
  )
}

// Pre-defined templates
const toastTemplates = {
  success: {
    icon: <span className="text-green-500 text-xl">✓</span>,
    className: "border-green-300 bg-green-50"
  },
  error: {
    icon: <span className="text-red-500 text-xl">✕</span>,
    className: "border-red-300 bg-red-50"
  },
  info: {
    icon: <span className="text-blue-500 text-xl">ℹ</span>,
    className: "border-blue-300 bg-blue-50"
  }
}

// Helper function to show templated toasts
const showToast = (type, message, action) => {
  const template = toastTemplates[type] || toastTemplates.info
  return useToastStore.getState().show({
    icon: template.icon,
    message,
    action
  })
}

export { Toast, ToastContainer, useToastStore, showToast }
export default Toast
