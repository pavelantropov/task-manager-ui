import { DefaultTasksArray } from "../../data/data";
import Task, {
  GetTasksResponse,
  CreateTaskRequest,
  CreateTaskResponse,
} from "./types";

export function getTasks(): Promise<GetTasksResponse> {
  return new Promise<GetTasksResponse>((resolve) => {
    let data: Task[];

    if (process.env.NODE_ENV === "test") {
      data = DefaultTasksArray;
    } else {
      data = fetch(`${process.env.REACT_APP_API_URI}/api/tasks`, {
        method: "GET",
        headers: { Accept: "application/json" },
      }).then((response) => response.json()) as unknown as Task[];
    }

    resolve({
      data: data,
    } as GetTasksResponse);
  });
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
