export default interface Task {
  taskId: string;
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface FetchTasksResponse extends Response {
  data: Task[];
  count: number;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface CreateTaskResponse extends Response {
  
}