"use client";

import { useEffect, useState } from "react";
import "./styles.css";
import Banner from "@/components/general/Banner";
import DataGrid from "@/components/general/DataGrid";
import ProjectsRow from "@/components/site_specific/ProjectsRow";
import Default from "@/components/general/Default";
import banner_model from "@/data/models/home/banner.json";
import focus_areas_model from "@/data/models/home/focus_areas.json";
import about_me_model from "@/data/models/home/about_me.json";
import { ProjectInterface } from "@/types/home";

export default function Home() {
  const [projects, setProjects] = useState<ProjectInterface[] | false>(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await fetch(`${apiUrl}/api/projects`, { cache: "default" });
        if (!response.ok) {
          console.log("Response not ok");
          console.log(response);
        } else {
          console.log("Response ok");
          const projects: ProjectInterface[] = await response.json();
          console.log("Projects received");
          console.log(projects);
          setProjects(projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <Banner model={banner_model} />

      {/* Homepage Content */}
      <section className="container body-content">
        <DataGrid model={focus_areas_model} />
        {projects && projects.length > 0 && <ProjectsRow projects={projects} />}
        <Default model={about_me_model} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto mt-16 flex flex-col items-center justify-center space-y-8">
        {/* Contact form or other contact details */}
      </section>
    </main>
  );
}
