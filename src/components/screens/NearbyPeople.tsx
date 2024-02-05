import { peopleNearMe } from "../../assets/Data/peopleNearMe"
import { Footer } from "../Footer"
import { Header } from "../Header"
import ProfileCard from "../ProfileCard"

export const NearbyPeople = ()=>{
    return(
        <>
      <Header />
      <div className="p-2">
        <div className="fs-1 fw-bold">People Near You</div>
        <div className="mt-2">
          {peopleNearMe?.map((item, index) => (
            <ProfileCard
              key={index}
              organization={item.organization}
              job_desc={item.job_desc}
              profile={item.profile}
              website = {item.website}
            />
            
          ))}
        </div>
      </div>
        <Footer />
    </>
    )
}