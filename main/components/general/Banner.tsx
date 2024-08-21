import React from "react";
import Link from "next/link";

interface BannerProps {
  model: {
    title: string;
    description: string;
    cta: {
      text: string;
      link: string;
    };
  };
}

const Banner: React.FC<BannerProps> = ({ model }) => {
  return (
    <section className="hero w-full flex flex-col items-center justify-center space-y-8 lg:space-y-16">
      <h1 className="text-5xl font-bold text-center text-primary dark:text-white">{model.title}</h1>
      <p className="text-xl text-center dark:text-white">{model.description}</p>
      <Link href={model.cta.link} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {model.cta.text}
      </Link>
    </section>
  );
};

export default Banner;
