import { Card, Row, Col, FormCheck, Nav } from "react-bootstrap";
import DeleteTaskPopup from "./DeleteTaskPopup";
import EditTaskPopup from "./EditTaskPopup";

import Task from "./types";

const TaskCard = (props: Task) => {
  const timeUntilDeadline =
    props.deadline != undefined &&
    props.deadline.getTime() - new Date().getTime();
  const daysLeft =
    timeUntilDeadline && timeUntilDeadline > 0
      ? Math.ceil(timeUntilDeadline / (1000 * 3600 * 24))
      : 0;

  return (
    <>
      <Card
        body
        className="d-flex flex-fill text-start m-4 shadow p-1 bg-white border-light"
      >
        <Row >
          <Col xs="auto" className="ms-2">
            <FormCheck
              className="d-flex h-100 align-items-center"
              type="checkbox"
              id="task-list-checkbox"
            />
          </Col>
          <Col>
            <Card.Title className="mb-1">{props.title}</Card.Title>

            <Card.Text
              className="fs-6 mb-1 text-muted"
              style={{ minHeight: "2rem" }}
            >
              {props.description}
            </Card.Text>
            <Card.Text className="text-muted" style={{ minHeight: "1.5rem" }}>
              <small>
                {daysLeft} {daysLeft == 1 ? "day" : "days"} left
              </small>
            </Card.Text>
          </Col>
          <Col xs="auto" className="me-2">
            <Nav className="justify-content-end">
              <EditTaskPopup
                taskId={props.taskId}
                title={props.title}
                description={props.description}
                deadline={props.deadline}
                labels={props.labels}
              />
              <DeleteTaskPopup
                {...props.taskId}
              />
            </Nav>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default TaskCard;
