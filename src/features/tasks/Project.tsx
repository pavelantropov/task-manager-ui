import React, { useState } from "react";
import TaskCard from "./TaskCard";
import Task from "./task";
import { Container, FormCheck } from "react-bootstrap";

export interface ProjectProps {
  projectName?: string;
  items?: Task[];
}

const defaultItems: Task[] = [
  {
    title: "Complete AZ-900 MS learning path",
    description:
      "Complete the remaining modules. Start preparing for the exam for real",
    deadline: new Date("20220207"),
    labels: ["work", "learning"],
  },
  {
    title: "Get rid of the intern status",
    description:
      "Become a real Junior Software Engineer finally. Get a 3x raise",
    deadline: new Date("20220216"),
    labels: ["work", "money"],
  },
  {
    title: "Credit card payment",
    description: "Find ₽110,000 and deposit to the Sberbank credit card",
    deadline: new Date("20220228"),
    labels: ["money", "debt"],
  },
];

const Project = ({
  projectName = "New project",
  items = defaultItems,
}: ProjectProps) => {
  return (
    <>
      <Container className="d-flex mt-3 align-items-end">
        <div className="ms-4">
          <h1 key="projectName" className="fs-2 text-muted">
            {projectName}
          </h1>
        </div>
        <FormCheck
          className="ms-auto me-4 text-muted"
          type="switch"
          label="Kanban view"
        />
      </Container>
      {items?.map(() => (
        <TaskCard />
      ))}
    </>
  );
};

export default Project;
