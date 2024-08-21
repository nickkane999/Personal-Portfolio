import React from "react";
import parse from "html-react-parser";
import { DefaultProps } from "@/types/home";

const Default: React.FC<DefaultProps> = ({ model }) => {
  let html = model.html;
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 p-8">{model.title}</h2>
      <div className="container">{parse(html)}</div>
    </section>
  );
};

export default Default;
