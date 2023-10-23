import React from "react";
import "../styles/ApplicationForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

export default function ApplicationForm() {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" required={true} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" required={true} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" required={true} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Phone No.*</Form.Label>
              <Form.Control type="text" required={true} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Headline</Form.Label>
            <Form.Control type="text" />
            <Form.Label>
              Tip: Short description that describes what you do, e.g. SDE.
            </Form.Label>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control as="textarea" type="text" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Attach Resume*</Form.Label>
            <Form.Control type="file" required={true} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </Container>
  );
}
