import type { MetaFunction } from "@remix-run/node";
import Header from '../components/Header'
import ContactInfo from "../components/ContactInfo";
import RecentActivities from "../components/RecentActivities";
import 'bootstrap/dist/css/bootstrap.min.css';
import { User, Activity } from '../types';
import BalanceShow from "../components/BalanceShow";
import '../components/global.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const user: User = {
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/100",
  email: "john.doe@example.com",
  phone: "(123) 456-7890"
};

const activities: Activity[] = [
  { title: "Posted a new blog article", date: "2024-06-01", description: "Shared insights on the latest tech trends." },
  { title: "Commented on a friend's post", date: "2024-06-02", description: "Engaged in a discussion about web development." },
  { title: "Joined a new group", date: "2024-06-03", description: "Became a member of the local tech community." }
];
export default function Index() {
  return (
    <div className="container py-4">

    
      <div className="pb-3 mb-4 border-bottom">
      <Header userName={user.name} profilePicture={user.profilePicture} />
      <div className="p-5 mb-4 bg-light rounded-3">
      <ContactInfo email={user.email} phone={user.phone} />
      <BalanceShow />
      </div>
      <RecentActivities activities={activities} />
    
      
    </div>
    </div>
    
  );
}
