import Task from "../features/tasks/types";

export const DefaultTasks: Task[] = [
  {
    taskId: "1",
    title: "Complete AZ-900 MS learning path",
    description:
      "Complete the remaining modules. Start preparing for the exam for real",
    deadline: new Date("2022-2-7"),
    labels: ["work", "learning"],
  },
  {
    taskId: "2",
    title: "Get rid of the intern status",
    description:
      "Become a real Junior Software Engineer finally. Get a 3x raise",
    deadline: new Date("2022-2-16"),
    labels: ["work", "money"],
  },
  {
    taskId: "3",
    title: "Credit card payment",
    description: "Find ₽110,000 and deposit to the Sberbank credit card",
    deadline: new Date("2022-2-28"),
    labels: ["money", "debt"],
  },
];