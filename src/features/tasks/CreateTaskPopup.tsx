import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createTask } from "./tasksAPI";

interface FormState {
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

const CreateTaskPopup = () => {
  const [form, setForm] = useState<FormState>();
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);
  const handleSubmit = () => {
    alert("not implemented");
    // createTask();
  };

  return (
    <>
      <Button
      // TODO fix margin bottom
        className="mb-4 ms-5 text-muted"
        size="lg"
        variant="outline-light"
        onClick={handleShowPopup}
      >
        + Add task
      </Button>

      <Form>
        <Modal show={showPopup} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Create a new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="createTaskFormTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createTaskFormDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createTaskFormDeadline">
              <Form.Label>deadline</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Discard
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Create task
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default CreateTaskPopup;
