import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import Credentials from "./components/Credentials";
import Dashboard from "./components/Dashboard";
import { NearbyPeople } from "./components/NearbyPeople";
import { PostJobs } from "./components/PostJobs";
import { Messages } from "./components/Messages";
import { UserProfile } from "./components/UserProfile";
import { Notification } from "./components/Notification";
import { MyNetworks } from "./components/MyNetworks";

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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
