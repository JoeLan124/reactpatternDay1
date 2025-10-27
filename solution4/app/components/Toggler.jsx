"use client"

const Toggler = ({ onClick, children, visible, className }) => {

  return (
    <div onClick={onClick} className={className }
>
        {visible && (
          <div className="bg-white text-black w-1/3 h-48 p-2 rounded-2xl">
            {children}
          </div>
        )}
      </div>
    );
}
export default Toggler