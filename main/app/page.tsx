import "./styles.css";
import Banner from "@/components/general/Banner";
import DataGrid from "@/components/general/DataGrid"; // Import the DataGrid component
import ProjectsRow from "@/components/site_specific/ProjectsRow";
import Default from "@/components/general/Default";
import banner_model from "@/data/models/home/banner.json"; // Import the model.json file
import focus_areas_model from "@/data/models/home/focus_areas.json"; // Import the model.json file
import about_me_model from "@/data/models/home/about_me.json"; // Import the model.json file

interface Project {
  _id: string;
  id: number;
  title: string;
  description: string;
  github_link: string;
  startDate: string;
  endDate: string;
  estimatedTime: string;
  hidden: boolean;
}

async function fetchProjects(showHidden: boolean): Promise<Project[]> {
  const response = await fetch("http://localhost:3000/api/projects", { cache: "force-cache" });
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

export default async function Home() {
  const projects = await fetchProjects(false); // Fetch projects with default parameter

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <Banner model={banner_model} />

      {/* Homepage Content */}
      <section className="container body-content">
        <DataGrid model={focus_areas_model} />
        <ProjectsRow projects={projects} />
        <Default model={about_me_model} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto mt-16 flex flex-col items-center justify-center space-y-8">
        {/* Contact form or other contact details */}
      </section>
    </main>
  );
}
