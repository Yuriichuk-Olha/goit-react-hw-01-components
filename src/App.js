import ProfileUser from "./components/Profile/ProfileUser";
import user from "./components/Profile/user.json";

import StatisticsList from "./components/Statistics/StatisticsList";
import data from "components/Statistics/data.json";


export default function App() {
    return ( 
    <div>
        <ProfileUser users={user} />
        <StatisticsList title="Upload stats" stats={data} />
        <StatisticsList stats={data} />
        
    </div>
    );
};



