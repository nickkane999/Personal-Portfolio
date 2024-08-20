import { NextResponse } from "next/server";
import path from "path";
import { writeToTextFile } from "@/util/api/fileManagement";

export async function POST(request: Request) {
  try {
    // Get the form data from the request body
    const formData = await request.json();
    const { firstName, lastName, email, company, description } = formData;

    // Write the form data to the contact_requests.txt file
    const formDataString = `First Name: ${firstName},Last Name: ${lastName},Email: ${email},Company: ${company},Description: ${description}\n`;
    const filePath = path.join(process.cwd(), "data", "contact_requests.txt");
    writeToTextFile(formDataString, filePath);

    // Send a success response
    return NextResponse.json({ message: "Form data received and saved successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
