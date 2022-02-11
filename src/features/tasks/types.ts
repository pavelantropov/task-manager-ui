export default interface Task {
  taskId: string;
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface GetTasksResponse extends Response {
  data: Task[];
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface CreateTaskResponse extends Response {
  
}