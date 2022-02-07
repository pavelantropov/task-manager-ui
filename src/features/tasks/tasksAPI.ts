import Task from "./types";

export function getTask(taskId: number): Promise<Task> {
  const task: Task = {
    title: "Test task",
    description: "A task to test if it works",
    deadline: new Date(),
    labels: ["label1", "label2"],
  };

  if (process.env.NODE_ENV === "test") {
    return new Promise<Task>((resolve) =>
      setTimeout(() => resolve(task), 1500)
    );
  } else {
    return fetch(`${process.env.REACT_APP_API_URI}/api/tasks/${taskId}`, {
      method: "GET",
    })
      .then((response) => response.json)
      .then((data) => data as unknown as Promise<Task>);
  }
}
