import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../styles/JobDetail.css";
import axios from "axios";
import ApplicationForm from "./ApplicationForm";
export default function JobDetail() {
  const { id } = useParams();
  const [apply, setApply] = useState(false);
  const [jobLoaded, setJobLoaded] = useState(false);
  const [jobDetails, setJobDetails] = useState({});

  const fetchJobDetails = () => {
    setJobLoaded(false);
    axios({
      method: "get",
      url: `http://localhost:8000/api/v1/jobs/detail/${id}`,
    })
      .then(function (response) {
        setJobDetails(response.data.job);
        setJobLoaded(true);
      })
      .catch((error) => {
        console.log("something went wrong");
        console.log(error);
      });
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const onApplyClick = () => {
    setApply(true);
  };

  return (
    <Container>
      {jobLoaded && (
        <>
          <Row className="detail_container">
            <Col sm={4} className="detail_card">
              <div className="detail_point">
                <div>Location</div>
                <div>{jobDetails.location}</div>
              </div>
              <div className="detail_point">
                <div>Salary</div>
                <div>{jobDetails.salary}</div>
              </div>
              <div className="detail_point">
                <div>Job Type</div>
                <div>{jobDetails.job_type}</div>
              </div>
              <div className="detail_point">
                <div>Date Posted</div>
                <div>{new Date(jobDetails.created_at).toDateString()}</div>
              </div>
              <div className="detail_point">
                <button className="apply_button" onClick={onApplyClick}>
                  Apply Now
                </button>
              </div>
            </Col>
            <Col>
              <h2>{`${jobDetails.job_title} at ${jobDetails.company.name}`}</h2>
              <p>{jobDetails.description}</p>
              {jobDetails &&
                Object.keys(jobDetails.points).map((point) => {
                  return (
                    <>
                      <h3>{point}</h3>
                      <ul>
                        {jobDetails.points[point].map((pt) => (
                          <li>{pt}</li>
                        ))}
                      </ul>
                    </>
                  );
                })}
              <button className="apply_button" onClick={onApplyClick}>
                Apply Now
              </button>
            </Col>
          </Row>
          <Row className="apply_form">
            <Col>{apply ? <ApplicationForm /> : ""}</Col>
          </Row>
        </>
      )}
    </Container>
  );
}
