import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createTask } from "./tasksAPI";

const CreateTaskPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [titleInput, setTitleInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string | undefined>(
    ""
  );
  const [deadlineInput, setDeadlineInput] = useState<Date | null | undefined>(
    null
  );

  const clearFormState = () => {
    setTitleInput("");
    setDescriptionInput("");
    setDeadlineInput(null);
  };

  const handleShowPopup = () => setShowPopup(true);
  const handleClose = () => {
    setShowPopup(false);
  };

  const onDiscard = () => {
    clearFormState();
    handleClose();
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const task = {
      title: titleInput,
      description: descriptionInput !== "" ? descriptionInput : undefined,
      deadline: deadlineInput !== null ? deadlineInput : undefined,
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
        onClick={handleShowPopup}
      >
        + Add task
      </Button>

      <Modal show={showPopup} onHide={handleClose} size="lg" centered>
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
            <Button variant="secondary" onClick={onDiscard}>
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
