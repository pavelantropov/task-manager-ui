import { DefaultTasks } from "../../data/data";
import Task from "./types";

export function getTasks(): Promise<Task[]> {
  if (process.env.NODE_ENV != "test") {
    return new Promise<Task[]>((resolve) =>
      setTimeout(() => resolve(DefaultTasks), 1500)
    );
  } else {
    return fetch(`${process.env.REACT_APP_API_URI}/api/tasks`, {
      method: "GET",
    })
      .then((response) => response.json)
      .then((data) => data as unknown as Promise<Task[]>);
  }
}
