import React from "react";
import * as fs from "fs/promises";
import path from "path";
import { Task } from "@/types/tasks";

import TaskCard from "@/components/card/TaskCard";
import styles from "./index.module.css";

const fetchTasksData = async () => {
  const filePath = path.join(process.cwd(), "data/tasks.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const cachedTasks = JSON.parse(jsonData);
  return cachedTasks;
};

const ProjectsPage = async () => {
  const tasks = await fetchTasksData();

  return (
    <div className={styles.projectContainer}>
      {Object.entries<Task>(tasks) // Specify the type of tasks as Task
        .filter(([key, task]: [string, Task]) => !task.hidden) // Filter out hidden projects
        .map(([key, task]: [string, Task]) => (
          <TaskCard
            key={key} // Use the object key as key
            initialTitle={task.title}
            initialDescription={task.description}
            initialStartDate={task.startDate}
            initialEndDate={task.endDate}
            initialEstimatedTime={task.estimatedTime}
          />
        ))}
    </div>
  );
};

export default ProjectsPage;
