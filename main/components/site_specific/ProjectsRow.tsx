import React from "react";
import Link from "next/link";
import { ProjectType } from "@/types/home";

// Function to format the date if possible, otherwise return the original string
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? dateString : date.toLocaleDateString("en-US", options);
};

// The DataRow component receives a projects prop
const ProjectsRow: React.FC<{ projects: ProjectType[] }> = ({ projects }) => {
  return (
    <div className="projects-row">
      <h2 className="text-3xl font-bold text-primary dark:text-white mt-8 p-8">Projects</h2>
      <section className="flex flex-col space-y-4 px-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
            <div className="flex justify-between mt-4">
              <span>
                <span className="font-bold">Start Date: </span>
                {formatDate(project.startDate)}
              </span>
              <span>
                <span className="font-bold">End Date: </span>
                {formatDate(project.endDate)}
              </span>
              <span>
                <span className="font-bold">Estimated Time: </span>
                {project.estimatedTime}
              </span>
            </div>
            <div className="mt-4">
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsRow;
