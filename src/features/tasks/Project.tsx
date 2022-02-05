import React, { useState } from "react";
import TaskCard from "./TaskCard";
import Task from "./task";

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
  },
  {
    title: "Get rid of the intern status",
    description:
      "Become a real Junior Software Engineer finally. Get a 3x raise",
    deadline: new Date("20220216"),
  },
  {
    title: "Credit card payment",
    description: "Find ₽110,000 and deposit to the Sberbank credit card",
    deadline: new Date("20220228"),
  },
];

const Project = ({
  projectName = "New project",
  items = defaultItems,
}: ProjectProps) => {
  return (
    <>
      <h1 key="projectName" className="fs-2 ms-5 mt-3 text-muted">
        {projectName}
      </h1>
      {items?.map(() => (
        <TaskCard />
      ))}
    </>
  );
};

export default Project;
