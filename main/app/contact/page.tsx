"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

interface ContactFormProps {}

const Contact: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    description: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          description: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred while submitting the form");
    }
  };

  return (
    <div className={`${styles.container} mx-auto px-4 py-16`}>
      <h1 className={`${styles.heading} mb-8`}>Contact</h1>

      <p className={styles.description}>I'm passionate about using Artificial Intelligence (AI) to help businesses grow and achieve their goals. AI has the potential to revolutionize various aspects of business operations, from marketing and sales to customer service and product development.</p>
      <p className={styles.description}>
        I'm here to help you leverage the power of AI in your specific industry. Whether you're interested in implementing any of the projects I've listed on my website, or you have a unique challenge you'd like to discuss, feel free to reach out to me. I'm always happy to explore new opportunities
        and collaborate on innovative solutions using AI.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.rowContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="firstName" className={styles.label}>
              First Name:
            </label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name:
            </label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className={styles.input} required />
          </div>
        </div>

        <div className={styles.rowContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="company" className={styles.label}>
              Company:
            </label>
            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={styles.input} />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="description" className={styles.label}>
            Description:
          </label>
          <textarea name="description" id="description" value={formData.description} onChange={handleChange} className={styles.textarea} rows={5} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
