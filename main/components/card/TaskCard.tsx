import React from "react";
import styles from "./index.module.css";
import { TaskCardProps } from "@/types/tasks";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: any = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

const TaskCard: React.FC<TaskCardProps> = ({ initialTitle = "", initialDescription = "", initialStartDate = "", initialEndDate = "", initialEstimatedTime = "" }) => {
  return (
    <div className={`p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700 ${styles.card}`}>
      <div className={styles.field}>
        <div className={`text-xl font-bold text-primary dark:text-white ${styles.cardTitle}`}>{initialTitle}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.cardDescription}>{initialDescription}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.cardDate}>{formatDate(initialStartDate)}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.cardDate}>{formatDate(initialEndDate)}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.cardDate}>{initialEstimatedTime}</div>
      </div>
    </div>
  );
};

export default TaskCard;
