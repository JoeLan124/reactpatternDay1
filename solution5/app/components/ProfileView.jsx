const ProfileView = ({ user }) => {
  console.log("ProfileView received user:", user);
  console.log("user.user value:", user?.user);
  
  if (!user) {
    return (
      <div className="w-full bg-red-300 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profiles</h2>
        <p>Name:</p>
        <div>No user data available</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-red-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Profile Component
      </h2>
      {user && (
        <div>
          <p className="font-semibold">User:</p>
          <div className="font-bold text-xl">
            {user.user}
          </div>
          <p className="mt-2 font-semibold">Role:</p>
          <div>{user.role || "No role assigned"}</div>
          <p className="mt-2 font-semibold">Permissions:</p>
          <p>Access permitted</p>
        </div>
      )}
    </div>
  );
}
export default ProfileView
