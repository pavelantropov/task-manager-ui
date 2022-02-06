import { useEffect, useState } from "react";
import { Card, Row, Col, FormCheck } from "react-bootstrap";

import { getTask } from "./tasksAPI";

interface TaskCardState {
  title: string;
  description: string;
  deadline: Date;
  labels: string[];
}

const TaskCard = () => {
  const [task, setTaskCard] = useState<TaskCardState>({
    title: "Loading...",
    description: "",
    deadline: new Date(),
    labels: [],
  });

  const loadTask = async () => {
    const response = await getTask();
    if (response.title) {
      setTaskCard({
        title: response.title,
        description: response.description,
        deadline: response.deadline,
        labels: response.labels,
      });
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  const timeUntilDeadline = Math.abs(
    task.deadline.getTime() - new Date().getTime()
  );
  const daysLeft = Math.ceil(timeUntilDeadline / (1000 * 3600 * 24));

  return (
    <>
      <Card
        body
        className="d-flex flex-fill text-start m-4 shadow p-1 bg-white border-light"
      >
        <Row xs="auto">
          <Col className="ms-2">
            <FormCheck
              className="d-flex h-100 align-items-center"
              type="checkbox"
              id="task-list-checkbox"
            />
          </Col>
          <Col>
            <Card.Title className="mb-1">{task.title}</Card.Title>

            <Card.Text
              className="fs-6 mb-1 text-muted"
              style={{ minHeight: "2rem" }}
            >
              {task.description}
            </Card.Text>
            <Card.Text className="text-muted" style={{ minHeight: "1.5rem" }}>
              <small>
                {daysLeft} {daysLeft == 1 ? "day" : "days"} left
              </small>
            </Card.Text>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default TaskCard;
