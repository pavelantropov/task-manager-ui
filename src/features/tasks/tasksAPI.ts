import { DefaultTasksArray } from "../../data/data";
import Task, { CreateTaskRequest, CreateTaskResponse } from "./types";

export async function getTasks(): Promise<Task[]> {
  if (process.env.NODE_ENV === "test") {
    return new Promise<Task[]>((resolve) =>
      setTimeout(() => resolve(DefaultTasksArray), 1500)
    );
  } else {
    return (await fetch(`${process.env.REACT_APP_API_URI}/api/tasks`, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())) as unknown as Task[];
  }
}

export async function createTask(
  params: CreateTaskRequest
): Promise<CreateTaskResponse> {
  if (process.env.NODE_ENV === "test") {
    return new Promise<CreateTaskResponse>((resolve) =>
      setTimeout(() => resolve({ ok: true } as Response), 1500)
    );
  } else {
    return await fetch(`${process.env.REACT_APP_API_URI}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  }
}
