import { useLocation, useParams } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const JobDetails = () => {
  const { organization } = useParams();
  const location = useLocation();
  const { job_desc, profile, website } = location.state;
  return (
    <>
      <Header />
      <Card className="mx-2" style={{ marginTop: "5rem" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 40, fontWeight: 600 }}
            color="text.primary"
          >
            {profile}
          </Typography>
          <Typography variant="h4" component="div">
            {organization}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>{website}</Typography>
          <Typography
            sx={{ fontSize: 20, fontWeight: 700, mt: 3, }}
            style={{textDecoration:'underline'}}
            color="text.primary"
          >
            Job Description
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {job_desc}
          </Typography>
        </CardContent>
        <div className="d-flex flex-column align-items-center">
          <Button className="bg-primary text-light w-75">
            Ask for Referral
          </Button>
          <Button className="bg-info text-light w-75 mt-3">
            Request to connect
          </Button>
          <Button className="bg-light text-dark w-75 my-3">Share </Button>
        </div>
      </Card>
      <Footer />
    </>
  );
};
