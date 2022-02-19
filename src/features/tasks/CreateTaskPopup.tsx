import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createTask } from "./tasksAPI";

const CreateTaskPopup = () => {
  const [show, setShow] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState<Date | undefined>();
  const [labelsInput, setLabelsInput] = useState([""]);

  const clearFormState = () => {
    setTitleInput("");
    setDescriptionInput("");
    setDeadlineInput(undefined);
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
      title: titleInput,
      description: descriptionInput,
      deadline: deadlineInput,
      labels: labelsInput,
    };

    createTask(task);

    clearFormState();
    handleClose();
  };

  return (
    <>
      <Button
        className="mb-4 ms-5 text-muted"
        size="lg"
        variant="outline-light"
        onClick={handleShow}
      >
        + Add task
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a new task</Modal.Title>
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
            <Button variant="primary" type="submit">
              Create task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateTaskPopup;
