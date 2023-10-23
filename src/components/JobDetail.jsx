import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../styles/JobDetail.css";
import ApplicationForm from "./ApplicationForm";
export default function JobDetail() {
  const { id } = useParams();
  const [apply, setApply] = useState(false);

  const onApplyClick = () => {
    setApply(true);
  };

  return (
    <Container>
      <Row className="detail_container">
        <Col sm={4} className="detail_card">
          <div className="detail_point">
            <div>Location</div>
            <div>Pune</div>
          </div>
          <div className="detail_point">
            <div>Salary</div>
            <div>12LPA</div>
          </div>
          <div className="detail_point">
            <div>Job Type</div>
            <div>Full Time</div>
          </div>
          <div className="detail_point">
            <div>Date Posted</div>
            <div>Oct 12, 2023</div>
          </div>
          <div className="detail_point">
            <button onClick={onApplyClick}>Apply Now</button>
          </div>
        </Col>
        <Col>
          <h2>Backend Developer At Beekin</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            quibusdam voluptatem harum maxime obcaecati cupiditate, voluptas ad
            commodi. Dolorum error laboriosam, perspiciatis repudiandae tempora
            ipsam quas libero natus obcaecati assumenda. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Est earum delectus numquam
            laboriosam repellat cumque repudiandae, dolorum maxime aliquid
            impedit eveniet quaerat consequatur, quod neque quae rerum et.
            Repellendus, totam!
          </p>
          <h3>Responsibility</h3>
          <ul>
            <li>1</li>
            <li>1</li>
          </ul>

          <h3>Requirement</h3>
          <ul>
            <li>1</li>
            <li>1</li>
          </ul>
          <button onClick={onApplyClick}>Apply Now</button>
        </Col>
      </Row>
      <Row>
        <Col>{apply ? <ApplicationForm /> : ""}</Col>
      </Row>
    </Container>
  );
}
