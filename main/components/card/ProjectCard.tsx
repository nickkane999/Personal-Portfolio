import React from "react";
import styles from "./index.module.css";
import { ProjectCardProps } from "@/types/projects";

const ProjectCard: React.FC<ProjectCardProps> = ({ title = "", description = "" }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
      <h3 className="text-xl font-bold text-primary dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
