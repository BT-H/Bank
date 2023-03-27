import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UserContext } from "./context";

export function Home() {
  // const ctx = useContext(UserContext);
  return (
    <Row>
      <Col >
        <Card>
          <Card.Body>
            <Card.Title>
              <h2 className="text-uppercase text-center">Welcome to Brian's Bank</h2>
            </Card.Title>
            <Card.Text>
              <h6 className="text-uppercase text-center">We're Here to Serve You</h6>
              <img
                src="https://img.pikbest.com/png-images/bank-modern-logo-vector-graphic-element-for-your-business_1647840.png!f305cw"
                className="rounded mx-auto d-block"
                alt="bank-cover"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
