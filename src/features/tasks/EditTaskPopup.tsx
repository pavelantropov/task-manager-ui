import { FormEvent, useState } from "react";
import { Button, Form, Modal, Nav } from "react-bootstrap";
import { updateTask } from "./tasksAPI";
import Task from "./types";

const EditTaskPopup = (props: Task) => {
  const [show, setShow] = useState(false);

  const [titleInput, setTitleInput] = useState(props.title);
  const [descriptionInput, setDescriptionInput] = useState(props.description);
  const [deadlineInput, setDeadlineInput] = useState(props.deadline);
  const [labelsInput, setLabelsInput] = useState(props.labels);

  const clearFormState = () => {
    setTitleInput(props.title);
    setDescriptionInput(props.description);
    setDeadlineInput(props.deadline);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDiscard = () => {
    clearFormState();
    handleClose();
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const task = {
      taskId: props.taskId,
      title: titleInput,
      description: descriptionInput,
      deadline: deadlineInput,
      labels: labelsInput,
    };

    updateTask(task);

    clearFormState();
    handleClose();
  };

  return (
    <>
      <Nav.Item>
        <Nav.Link className="text-muted" onClick={handleShow}>
          Edit
        </Nav.Link>
      </Nav.Item>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit a task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="createTaskFormTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createTaskFormDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createTaskFormDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDeadlineInput(new Date(e.target.value))}
                value={
                  deadlineInput && deadlineInput !== null
                    ? deadlineInput.toISOString().split("T")[0]
                    : ""
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDiscard}>
              Discard
            </Button>
            <Button variant="success" type="submit">
              Edit task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditTaskPopup;
