import { useContext, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "./context";
import TableUsers from "./TableUsers";
const viewMode = {
  Table: "Table",
  Cards: "Cards",
};

export function AllData() {
  const { users } = useContext(UserContext);
  const [view, setView] = useState(viewMode.Table);

  return (
    <Row>
      <Col>
        <h1>All Data</h1>
        <Row className="d-flex justify-content-center my-4"></Row>
        {view === viewMode.Card ? (
          <TableUsers users={users} />
        ) : (
          <Row className="d-flex justify-content-center">
            {users.map((user, i) => (
              <Col key={i} className="my-2" lg={4}>
               {/* <UserCard user={user} />  */}
                <Card bg="light" text="black">
                  <Card.Header>{user.name}'s Account' {i}</Card.Header>
                  <Card.Body>
                    <Card.Title className="mb-3">{user.name}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                    <Card.Text>Password: {user.password}</Card.Text>
                    <Card.Text className="mt-0">
                      Balance: ${user.balance}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
}
