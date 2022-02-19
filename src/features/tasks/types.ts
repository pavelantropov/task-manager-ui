export default interface Task {
  taskId: string;
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface GetTasksResponse extends Response {
  tasks: Task[];
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface CreateTaskResponse extends Response {
  
}

export interface UpdateTaskRequest {
  taskId: string;
  title: string;
  description?: string;
  deadline?: Date;
  labels?: string[];
}

export interface UpdateTaskResponse extends Response {
  
}

export interface DeleteTaskResponse extends Response {
  
}