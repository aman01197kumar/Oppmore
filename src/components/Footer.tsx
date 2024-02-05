import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <BottomNavigation className="position-fixed fixed-bottom pt-2 border-top">
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon fontSize="large" />}
        
        onClick={() => navigate("/feed")}
      />
      <BottomNavigationAction
        label="RecordVoiceOverIcon"
        icon={<RecordVoiceOverIcon fontSize="large" />}
        onClick={() => navigate("/nearby-people")}
      />
      <BottomNavigationAction
        label="AddBoxIcon"
        icon={<AddBoxIcon fontSize="large" />}
        onClick={() => navigate("/post-jobs")}
      />
      
      <BottomNavigationAction
        label="MailIcon"
        icon={<MailIcon fontSize="large" />}
        onClick={() => navigate("/messages")}
      />
      <BottomNavigationAction
        label="AccountCircleIcon"
        icon={<AccountCircleIcon fontSize="large" />}
        onClick={() => navigate("/user-profile")}
      />
    </BottomNavigation>
  );
};
