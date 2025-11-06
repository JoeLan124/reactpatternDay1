"use client"
import { withDataFetching } from "../HOC/withDataFetching"
import Reports from "./Reports"
import ProfileView from "./ProfileView"
import AdminPanel from "./AdminPanel"

// Wrap the components with the same HOC
const ReportsWithData = withDataFetching(Reports);
const ProfileViewWithData = withDataFetching(ProfileView);
const AdminPanelWithData = withDataFetching(AdminPanel)

export default function UserWithHOC() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard with HOC</h1>
      <p className="text-center mb-8 text-gray-600">
        Each component below is wrapped with the withDataFetching HOC and fetches its own user data
      </p>
      <div className="space-y-6">
        <ReportsWithData />
        <ProfileViewWithData />
        <AdminPanelWithData />
      </div>
    </div>
  );
}
