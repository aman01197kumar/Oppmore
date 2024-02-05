import React from "react";
import { useNavigate } from "react-router-dom";

interface ProfileCardProps {
  // name: string;
  organization: string;
  job_desc: string;
  // currently_hiring: boolean;
  profile: string;
  website: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  // name,
  organization,
  job_desc,
  // currently_hiring,
  profile,
  website,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="profile-card shadow-sm p-3 mb-5 bg-white rounded"
      onClick={() =>
        navigate("/job-details/" + organization, {
          state: {
            name,
            job_desc,
            profile,
            // currently_hiring,
            organization,
            website,
          },
        })
      }
    >
      <h1>{profile}</h1>
      <h3>{organization}</h3>
    </div>
  );
};

export default ProfileCard;
