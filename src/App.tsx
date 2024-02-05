import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/screens/Splash";
import Credentials from "./components/screens/Credentials";
import Dashboard from "./components/screens/Dashboard";
import { NearbyPeople } from "./components/screens/NearbyPeople";
import { PostJobs } from "./components/screens/PostJobs";
import { Messages } from "./components/screens/Messages";
import { UserProfile } from "./components/screens/UserProfile";
import { Notification } from "./components/screens/Notification";
import { MyNetworks } from "./components/screens/MyNetworks";
import { JobDetails } from "./components/screens/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="credentials" element={<Credentials />} />
        <Route path="feed" element={<Dashboard />} />
        <Route path = 'nearby-people' element={<NearbyPeople/>}/>
        <Route path = 'post-jobs' element={<PostJobs/>}/>
        <Route path="messages" element = {<Messages/>}/>
        <Route path="user-profile" element = {<UserProfile/>}/>
        <Route path="notifications" element = {<Notification/>}/>
        <Route path="my-networks" element={<MyNetworks/>}/>
        <Route path = "job-details/:organization" element = {<JobDetails/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
