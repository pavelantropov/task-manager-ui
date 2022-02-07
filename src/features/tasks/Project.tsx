import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Task from "./types";
import { Container, FormCheck } from "react-bootstrap";
import { getTasks } from "./tasksAPI";

export interface ProjectState {
  projectId: number;
  projectName?: string;
  tasks?: Task[];
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
const Project = () => {
  const [project, setProject] = useState<ProjectState>({
    projectId: 1,
    projectName: "New project",
    tasks: [],
  });

  const loadTasks = async () => {
    const fetchTasksResponse = await getTasks();
    if (fetchTasksResponse) {
      setProject({
        projectId: project.projectId,
        projectName: project.projectName,
        tasks: fetchTasksResponse,
      });
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Container className="d-flex mt-3 align-items-end">
        <div className="ms-4">
          <h1 key="projectName" className="fs-2 text-muted">
            {project.projectName}
          </h1>
        </div>
        <FormCheck
          className="ms-auto me-4 text-muted"
          type="switch"
          label="Kanban view"
        />
      </Container>
      {project.tasks?.map((task) => (
        <TaskCard
          taskId={task.taskId}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          labels={task.labels}
        />
      ))}
    </>
  );
};

export default Project;
