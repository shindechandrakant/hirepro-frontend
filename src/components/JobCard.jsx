import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/JobCard.css";
import { CiLocationOn } from "react-icons/ci";
import { PiBagThin, PiDotDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function JobCard(prop) {
  const { job } = prop;
  console.log(job);

  const navigate = useNavigate();
  return (
    <Container className="job_card">
      <Row>
        <Col sm={8} className="job_props">
          <h3>{job.job_title}</h3>
          <p>{job.company_name}</p>
          <div>
            <span>
              <PiBagThin />
              {job.experience}
            </span>
            <span>
              <CiLocationOn /> {job.location}
            </span>
          </div>
          <span>
            {job.key_skills?.map((skill) => {
              return (
                <>
                  <PiDotDuotone />
                  {skill}
                </>
              );
            })}
          </span>
          <div>posted on {new Date(job.created_at).toDateString()}</div>
        </Col>
        <Col className="view_job">
          <button
            onClick={() => {
              navigate(`/job/${job.job_id}`);
            }}
          >
            View Job
          </button>
        </Col>
      </Row>
    </Container>
  );
}
