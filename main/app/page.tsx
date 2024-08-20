import Image from "next/image";
import "./styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="hero w-full flex flex-col items-center justify-center space-y-8 lg:space-y-16">
        <h1 className="text-5xl font-bold text-center text-primary dark:text-white">Nick Kane - Web Developer</h1>
        <p className="text-xl text-center  dark:text-white">Leveraging technology and tools to create value for users online.</p>
        <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Get in touch
        </Link>
      </section>

      {/* Services Section */}
      <section className="container body-content">
        <h2 className="text-3xl font-bold text-primary dark:text-white mt-8 p-8">Focus areas</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          <div className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">AI Systems</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Creating new systems that improve the customer experience on web and mobile applications.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Storing and processing information in efficent ways to make applications easier to maintain.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Designing layouts and processes for developers to use CMS internally, and users to have valueable expereinces.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">Scripting</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Using automation to augment my experiences with different hobbies and accelerate progress.</p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 p-8">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 px-8 leading-relaxed">
            I'm Nick Kane, a passionate web developer with 5 years of experience building applications for websites and internal content management systems (CMS). I'm dedicated to helping businesses leverage tools in web development and the AI space to solve complex problems, optimize operations,
            and gain a competitive edge.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 px-8 leading-relaxed mt-8">
            Previously, I've worked on projects in industries like healthcare, finance, and manufacturing. I'm skilled in implemeneting natural language processing within apps, making it easier for users to get answers and view information that's formatted and tailored to their needs. I also have
            experience designing and implmenting user experiences with frontend development, and scaling this content with backend development to maintain an effient CMS. When I step away from the computer, I enjoy watching movies, going on walks, and playing board games.
          </p>
        </section>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto mt-16 flex flex-col items-center justify-center space-y-8">
        {/* Contact form or other contact details */}
      </section>
    </main>
  );
}
