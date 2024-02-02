import React from "react";

interface ProfileCardProps {
  name: string;
  organization: string;
  job_desc: string;
  currently_hiring: boolean;
  profile:string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  // name,
  organization,
  // job_desc,
  currently_hiring,
  profile
}) => {
  return (
    <div className="profile-card shadow-sm p-3 mb-5 bg-white rounded">
      <h3>{profile}</h3>
      {/* <p>Name: {name}</p> */}
      <p>Organization: {organization}</p>
      {/* <p>Job Description: {job_desc}</p> */}
      <p>Currently Hiring: {currently_hiring ? "Yes" : "No"}</p>
    </div>
  );
};

export default ProfileCard;
