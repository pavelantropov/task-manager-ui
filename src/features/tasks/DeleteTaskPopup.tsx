import { FormEvent, useState } from "react";
import { Button, Form, Modal, Nav } from "react-bootstrap";
import { deleteTask } from "./tasksAPI";
import Task from "./types";

const DeleteTaskPopup = (taskId: string) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDiscard = () => handleClose();
  const handleSubmit = () => {
    deleteTask(taskId);
    handleClose();
  };

  return (
    <>
      <Nav.Item>
        <Nav.Link className="text-muted" onClick={handleShow}>
          Delete
        </Nav.Link>
      </Nav.Item>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete a task</Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-auto">Are you sure?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleDiscard}>
            Discard
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Delete task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTaskPopup;
