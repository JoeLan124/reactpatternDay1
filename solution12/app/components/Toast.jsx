"use client"

const Toast = ({ icon, message, action }) => {
    console.log("Rendering Toast (Client Component), action type:", typeof action);
    return (
      <div className="flex p-4 gap-4 bg-green-200">
        <div>{icon}</div>
        <div>{message}</div>
            <button onClick={() => action}></button>
      </div>
    );
};
export default Toast;
