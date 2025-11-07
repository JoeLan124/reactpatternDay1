const AdminPanel = ({ user }) => {
  return (
    <div className="w-full bg-amber-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Admin Component
      </h2>
      {user && (
        <div>
          <p className="font-semibold">User:</p>
          <div className="font-bold text-xl">
            {user.user}
          </div>
          <p className="mt-2 font-semibold">Role:</p>
          <div>{user.role || "No role assigned"}</div>
          <div>
            <p className="mt-2 font-semibold">
              Permissions:
            </p>{" "}
            {user.role !== "admin"
              ? "Access denied"
              : "Access permitted"}
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminPanel