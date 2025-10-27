"use client"

const Toggler = ({ onClick, children, visible }) => {

    return (
      <div onClick={onClick} className="cursor-pointer">
        {visible && (
          <div className="bg-amber-600 w-1/3 h-48">
            {children}
          </div>
        )}
      </div>
    );
}
export default Toggler