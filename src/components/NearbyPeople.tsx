import { peopleNearMe } from "../assets/Data/peopleNearMe"
import { Footer } from "./Footer"
import { Header } from "./Header"
import ProfileCard from "./ProfileCard"

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
              name={item.name}
              organization={item.organization}
              job_desc={item.job_desc}
              currently_hiring={item.currently_hiring}
              profile={item.profile}
            />
          ))}
        </div>
      </div>
        <Footer />
    </>
    )
}