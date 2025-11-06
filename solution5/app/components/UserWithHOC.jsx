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
    <div className="max-w-lg mx-auto mt-10 space-y-6">
        <ReportsWithData />
        <ProfileViewWithData />
        <AdminPanelWithData/>
    </div>
  );
}
