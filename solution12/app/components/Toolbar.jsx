const Toolbar = ({start, center, end}) => {
  return (
    <div>
      <div className="h-48 w-full bg-amber-400 text-black text-center flex items-center justify-center">
  
        {start}
      </div>

      <div
        className="h-48
        w-full
        bg-amber-200
        text-black
        text-center
        flex
        items-center
        justify-center">
    
        {center}
      </div>

      <div
        className="h-48
        w-full
        bg-amber-600
        text-black
        text-center
        flex
        items-center
        justify-center">
 
        {end}
      </div>
    </div>
  );
}
export default Toolbar