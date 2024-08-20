"use client";
import React, { useState, useEffect } from "react";
import TaskCardEditable from "@/components/card/TaskCardEditable";
import styles from "./index.module.css";
import { Task } from "@/types/tasks";

const ProjectsPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch tasks from the API
  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((fetchedTasks) => setTasks(Object.values(fetchedTasks))) // Convert to array
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const handleTaskUpdate = (updatedTask: Task, index: number) => {
    // Update task using its index
    const updatedTasks: any = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);

    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedTask, id: index }),
    })
      .then(() => {
        setIsSaving(false);
        alert("Task updated successfully");
      })
      .catch((err) => {
        console.error("Error saving tasks:", err);
        setIsSaving(false);
        alert("save failed");
      });
  };

  return (
    <div className={styles.projectContainer}>
      {tasks.map((task: Task, index: number) => (
        <TaskCardEditable
          key={index} // Use index as key (temporary)
          initialTitle={task.title}
          initialDescription={task.description}
          initialStartDate={task.startDate}
          initialEndDate={task.endDate}
          initialEstimatedTime={task.estimatedTime}
          initialHidden={task.hidden}
          onTaskUpdate={(updatedTask) => handleTaskUpdate(updatedTask, index + 1)}
        />
      ))}
      {isSaving && <p>Saving changes...</p>}
    </div>
  );
};

export default ProjectsPage;
