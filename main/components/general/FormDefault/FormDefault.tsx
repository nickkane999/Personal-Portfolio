"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { FormDefaultProps } from "@/types/contact";

const FormDefault: React.FC<FormDefaultProps> = ({ formModel }) => {
  const { form } = formModel;

  const [formData, setFormData] = useState(form.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));

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
        setFormData(form.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
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
    <div className={`${styles.container} mt-10`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {form.map((field, index) =>
          field.type === "textarea" ? (
            <div key={index} className={`${styles.inputContainer} mb-4`}>
              <label htmlFor={field.name} className={styles.label}>
                {field.label}
              </label>
              <textarea name={field.name} id={field.name} value={formData[field.name]} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} rows={5} required={field.required} />
            </div>
          ) : (
            <div key={index} className={`${styles.inputContainer} mb-4`}>
              <label htmlFor={field.name} className={styles.label}>
                {field.label}
              </label>
              <input type={field.type} name={field.name} id={field.name} value={formData[field.name]} onChange={handleChange} className={styles.input} required={field.required} />
            </div>
          )
        )}

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDefault;
