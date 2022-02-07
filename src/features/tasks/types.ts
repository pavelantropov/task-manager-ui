export default interface Task {
  taskId: number;
  title: string;
  description: string;
  deadline: Date;
  labels: string[];
}

export interface FetchTasksResponse extends Response {
  data: Task[];
  count: number;
}

