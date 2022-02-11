import { DefaultTasksArray } from "../../data/data";
import {
  GetTasksResponse,
  CreateTaskRequest,
  CreateTaskResponse,
} from "./types";

export function getTasks(): Promise<GetTasksResponse> {
  if (process.env.NODE_ENV === "test") {
    return new Promise<GetTasksResponse>((resolve) =>
      resolve({
        tasks: DefaultTasksArray,
      } as GetTasksResponse)
    );
  } else {
    return fetch(`${process.env.REACT_APP_API_URI}/api/tasks`, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json());
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
