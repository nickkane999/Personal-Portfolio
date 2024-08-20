"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import { Task, TaskCardEditableProps } from "@/types/tasks";

const TaskCardEditable: React.FC<TaskCardEditableProps> = ({ initialTitle, initialDescription, initialStartDate, initialEndDate, initialEstimatedTime, initialHidden, onTaskUpdate }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [estimatedTime, setEstimatedTime] = useState(initialEstimatedTime);
  const [hidden, setHidden] = useState(initialHidden); // Initialize hidden state

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleEstimatedTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstimatedTime(e.target.value);
  };

  const handleHiddenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTaskUpdate({
      title,
      description,
      startDate,
      endDate,
      estimatedTime,
      hidden, // Include hidden attribute
    });
  };

  return (
    <form className={`p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700 ${styles.card}`} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="title" className={styles.cardTitle}>
          Title:
        </label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} className="rounded-md border border-gray-300 px-3 py-2 mt-1 w-full" />
      </div>

      <div className={styles.field}>
        <label htmlFor="description" className={styles.cardDescription}>
          Description:
        </label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} className="rounded-md border border-gray-300 px-3 py-2 mt-1 w-full" />
      </div>

      <div className={styles.field}>
        <label htmlFor="startDate" className={styles.cardDate}>
          Start Date:
        </label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} className="rounded-md border border-gray-300 px-3 py-2 mt-1 w-full" />
      </div>

      <div className={styles.field}>
        <label htmlFor="endDate" className={styles.cardDate}>
          End Date:
        </label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} className="rounded-md border border-gray-300 px-3 py-2 mt-1 w-full" />
      </div>

      <div className={styles.field}>
        <label htmlFor="estimatedTime" className={styles.cardDate}>
          Estimated Time:
        </label>
        <input type="text" id="estimatedTime" value={estimatedTime} onChange={handleEstimatedTimeChange} className="rounded-md border border-gray-300 px-3 py-2 mt-1 w-full" />
      </div>

      {/* Add checkbox for hidden attribute */}
      <div className={styles.field}>
        <label htmlFor="hidden" className={styles.cardDate}>
          Hidden:
        </label>
        <div className={styles.checkboxHiddenContainer}>
          <input type="checkbox" id="hidden" value={hidden?.toString() ?? "false"} checked={hidden ?? false} onChange={handleHiddenChange} className={`${styles.checkboxHidden}`} />
        </div>
      </div>

      <button type="submit" className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
        Save Changes
      </button>
    </form>
  );
};

export default TaskCardEditable;
