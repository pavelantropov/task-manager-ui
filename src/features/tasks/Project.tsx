import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Task from "./types";
import { Container, FormCheck, Button } from "react-bootstrap";
import { getTasks } from "./tasksAPI";

export interface ProjectState {
  projectId: number;
  projectName?: string;
  tasks?: Task[];
}

const Project = () => {
  const [project, setProject] = useState<ProjectState>({
    projectId: 1,
    projectName: "New project",
    tasks: [],
  });
  
  const loadTasks = () => {
    getTasks().then((res) => {
      res.tasks.forEach((task) => task.deadline !== undefined ? task.deadline = new Date(task.deadline) : task);
      setProject({
        projectId: project.projectId,
        projectName: project.projectName,
        tasks: res.tasks,
      });
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Container className="d-flex mt-4 align-items-end">
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
      {project.tasks !== undefined && project.tasks?.length > 0 ? project.tasks?.map((task, index) => (
        <TaskCard
          key={"task_" + index}
          taskId={task.taskId}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          labels={task.labels}
        />
      )) : ""}
      <Button
        className="mb-4 ms-5 text-muted"
        size="lg"
        variant="outline-light"
        onClick={() => {
          alert("not supported");
        }}
      >
        + Add task
      </Button>
    </>
  );
};

export default Project;
