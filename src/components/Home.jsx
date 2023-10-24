import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Container, Row } from "react-bootstrap";
import "../styles/Home.css";
import axios from "axios";

export default function Home() {
  const [openJobs, setOpenJobs] = useState([]);
  const [openJobsCount, setOpenJobsCount] = useState(0);

  const fetchOpenJobs = () => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/jobs/list`,
    })
      .then(function (response) {
        setOpenJobs(response.data.jobs);
        setOpenJobsCount(response.data.count);
      })
      .catch((error) => {
        console.log("something went wrong");
        console.log(error);
      });
  };

  useEffect(() => fetchOpenJobs(), []);

  return (
    <Container>
      <Row>
        <a className="logo" href="https://beekin.co">
          <img
            width="130"
            height="30"
            src="https://beekin.co/wp-content/uploads/2022/01/beekin-logo-blue-101.png"
          />
        </a>
        <div className="banner">
          <h1>Jobs at Beekin!</h1>
          <h6>Want to Join out team? we have {openJobsCount} open jobs</h6>
        </div>
        {openJobs && openJobs.map((job) => <JobCard job={job} />)}
      </Row>
      <footer></footer>
    </Container>
  );
}
