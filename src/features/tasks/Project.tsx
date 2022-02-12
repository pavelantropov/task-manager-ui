import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Task from "./types";
import { Container, FormCheck } from "react-bootstrap";
import { getTasks } from "./tasksAPI";
import CreateTaskPopup from "./CreateTaskPopup";

interface ProjectState {
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
      res.tasks.forEach(
        (task) => task.deadline && (task.deadline = new Date(task.deadline))
      );
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
      {project.tasks &&
        project.tasks?.length > 0 &&
        project.tasks?.map((task, index) => (
          <TaskCard
            key={"task_" + index}
            taskId={task.taskId}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            labels={task.labels}
          />
        ))}

      <CreateTaskPopup />
    </>
  );
};

export default Project;
