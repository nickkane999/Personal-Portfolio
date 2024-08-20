import Image from "next/image";
import styles from "./styles.css"; // Assuming a separate CSS file for styling
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="mx-auto">
        {/* Hero Section */}
        <section className="hero w-full flex flex-col items-center justify-center space-y-8 lg:space-y-16">
          <h1 className="text-5xl font-bold text-center text-primary dark:text-white">Powered by ChatGPT</h1>
          <p className="text-xl text-center dark:text-white">Unlocking Artificial Intelligence for Your Business</p>
          <Link href="/ai-products" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View AI Products
          </Link>
        </section>

        {/* About ChatGPT Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 p-8">ChatGPT: Your AI Partner</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 px-16 leading-relaxed">
            We're proud to leverage ChatGPT, a powerful large language model developed by OpenAI, to create a more intelligent and engaging experience for you. ChatGPT helps us better understand your needs and provide you with accurate, relevant information and resources.
          </p>
        </section>

        {/* ...other sections like Services, About Us, Contact, etc. */}
      </section>

      <footer className="p-8 bg-gray-200 text-gray-400 py-4">
        <p>Copyright © 2024 Your Company Name</p>
      </footer>
    </main>
  );
}
