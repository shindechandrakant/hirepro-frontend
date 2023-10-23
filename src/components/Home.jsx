import React from "react";
import JobCard from "./JobCard";
import { Container, Row } from "react-bootstrap";
import "../styles/Home.css";

export default function Home() {
  const job = {
    job_id: "job-123",
    title: "Android Developer",
    company_name: "Beekin Co.",
    experience: "2-3Y",
    location: "Pune, India",
    key_skills: ["java", "Pyhton", "Node Js"],
    created_at: new Date().toDateString(),
  };
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
          <h6>Want to Join out team? we have 7 open jobs</h6>
        </div>
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
      </Row>
      <footer></footer>
    </Container>
  );
}
