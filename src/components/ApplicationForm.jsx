import React, { useState } from "react";
import "../styles/ApplicationForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ApplicationForm() {
  const { id } = useParams();
  const [formFields, setFormFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    headline: "",
    coverletter: "",
    resume: "",
  });
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onResumeSelected = (event) => {
    const resume = event.target.files[0];
    const { name } = event.target;
    setFormFields({ ...formFields, [name]: resume });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    const formData = new FormData();
    for (const [key, value] of Object.entries(formFields)) {
      formData.append(key, value);
    }

    axios({
      method: "post",
      url: `http://localhost:8000/api/v1/jobs/apply/${id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        alert("Applied SuccessFully");
      })
      .catch(function (error) {
        //handle error
        alert("Failed to Apply");
        console.log(error);
      });
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                required={true}
                onChange={inputChangeHandler}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                required={true}
                onChange={inputChangeHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required={true}
                onChange={inputChangeHandler}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Phone No.*</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                required={true}
                onChange={inputChangeHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Headline</Form.Label>
            <Form.Control
              type="text"
              name="headline"
              onChange={inputChangeHandler}
            />
            <Form.Label>
              Tip: Short description that describes what you do, e.g. SDE.
            </Form.Label>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control
              as="textarea"
              name="coverletter"
              type="text"
              onChange={inputChangeHandler}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Attach Resume*</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              required={true}
              onChange={onResumeSelected}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={onFormSubmit}>
          Click here to submit form
        </Button>
      </Form>
    </Container>
  );
}
