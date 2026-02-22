import Toolbar from "./components/Toolbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Responsive Toolbar Demo
      </h1>
      
      <p className="text-gray-600 mb-6">
        Resize your browser to see the responsive behavior. On smaller screens, 
        the center content collapses into an overflow menu.
      </p>

      {/* Demo 1: Basic slots */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Example 1: Basic Slots
        </h2>
        <Toolbar
          start={
            <div className="flex items-center gap-2">
              <span className="text-xl">🏠</span>
              <span className="font-semibold">Home</span>
            </div>
          }
          center={
            <div className="flex items-center gap-4">
              <button className="px-3 py-1 rounded hover:bg-amber-500/30 transition-colors">
                Products
              </button>
              <button className="px-3 py-1 rounded hover:bg-amber-500/30 transition-colors">
                Services
              </button>
              <button className="px-3 py-1 rounded hover:bg-amber-500/30 transition-colors">
                About
              </button>
            </div>
          }
          end={
            <div className="flex items-center gap-2">
              <button className="p-2 rounded hover:bg-amber-500/30 transition-colors">
                🔔
              </button>
              <button className="p-2 rounded hover:bg-amber-500/30 transition-colors">
                👤
              </button>
            </div>
          }
        />
      </div>

      {/* Demo 2: Navigation toolbar */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Example 2: Navigation Toolbar
        </h2>
        <Toolbar
          start={
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-bold text-lg">Logo</span>
            </div>
          }
          center={
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">Dashboard</a>
              <a href="#" className="hover:underline">Projects</a>
              <a href="#" className="hover:underline">Settings</a>
              <a href="#" className="hover:underline">Help</a>
            </div>
          }
          end={
            <button className="px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors">
              Sign Out
            </button>
          }
        />
      </div>

      {/* Demo 3: Search toolbar */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Example 3: Search Toolbar
        </h2>
        <Toolbar
          start={
            <button className="p-2 rounded hover:bg-amber-500/30 transition-colors">
              ← Back
            </button>
          }
          center={
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg border border-amber-600 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          }
          end={
            <div className="flex items-center gap-2">
              <button className="p-2 rounded hover:bg-amber-500/30 transition-colors">
                ⋮
              </button>
            </div>
          }
        />
      </div>

      {/* Responsive indicator */}
      <div className="fixed bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm">
        <span className="md:hidden">📱 Mobile View</span>
        <span className="hidden md:inline">🖥️ Desktop View</span>
      </div>
    </div>
  );
}
