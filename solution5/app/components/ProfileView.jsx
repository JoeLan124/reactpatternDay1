const ProfileView = ({ user }) => {
  const userName = user.name;
  const userRole = user.role;
  return (
    <div className="h-screen w-full bg-red-300">
      Profiles
    {user && userName}
    </div>
  );
}
export default ProfileView
