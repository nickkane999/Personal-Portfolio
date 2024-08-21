"use client";

import React from "react";
import FormDefault from "@/components/general/FormDefault/FormDefault";
import contactFormModel from "@/data/models/contact/contact_form.json";
import parse from "html-react-parser";

interface ContactFormProps {}

const Contact: React.FC<ContactFormProps> = () => {
  return (
    <div className="contact-page container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{contactFormModel.title}</h1>
      <div className="text-lg text-gray-600 leading-relaxed mb-6">{parse(contactFormModel.html)}</div>

      {/* Render ContactForm and pass the contactFormModel */}
      <FormDefault formModel={contactFormModel} />
    </div>
  );
};

export default Contact;
