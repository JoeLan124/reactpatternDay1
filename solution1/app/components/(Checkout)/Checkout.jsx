const Checkout = () => {
  return (
    <div className="flex h-16 bg-green-800 w-full justify-evenly items-center mb-8 rounded-3xl relative">
      <div className="flex w-full">
        <div className="flex justify-evenly w-full border-0 border-amber-500 relative">
          <div
            className="text-black z-10 bg-amber-400 rounded-full h-6 w-6"
            id="point1">
            1
          </div>
          <div className="text-black z-10 bg-amber-400 rounded-full h-6 w-6">
            2
          </div>
          <div className="text-black z-10 bg-amber-400 rounded-full h-6 w-6">
            3
          </div>
          <div
            className="text-black z-10 bg-amber-400 rounded-full h-6 w-6"
            id="point4">
            4
          </div>
          {/* Add a horizontal line from point 1 to point 4 */}
          <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-white transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
export default Checkout