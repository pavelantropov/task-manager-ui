interface Task {
  title: string;
  description: string;
  deadline: Date;
}

export function getTask(): Promise<Task> {
  const detail: Task = {
    title: "Test task",
    description: "A task to test, if it works",
    deadline: new Date(),
  };

  return new Promise<Task>((resolve) =>
    setTimeout(() => resolve(detail), 1500)
  );
}
