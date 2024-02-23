import { ActualMsg } from "../components/ActualMsg";
import { Conversations } from "../components/Conversations";
import { Sidebar } from "../components/Sidebar";
import { UserDetails } from "../components/UserDetails";

export const AgentScreen = () => {
  return (
    <div className="flex h-screen bg-grey-200 overflow-hidden">
      <Sidebar className="w-24" />
      <Conversations />
      <ActualMsg />
      <UserDetails />
    </div>
  );
};
