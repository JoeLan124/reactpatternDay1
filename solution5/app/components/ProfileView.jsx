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

  const userName = user.user;
  
  return (
    <div className="w-full bg-red-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profiles</h2>
      <p className="font-semibold">Name:</p>
      <div className="font-bold text-xl">
        {userName || "Username not found"}
      </div>
      <div className="mt-4 text-sm">
        <p className="font-semibold">Debug - Full user object:</p>
        <pre className="bg-white p-2 rounded">{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}
export default ProfileView
