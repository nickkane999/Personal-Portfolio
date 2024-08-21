import { NextResponse } from "next/server";
import client from "@/util/api/mongodb";

export async function POST(request: Request) {
  try {
    // Get the form data from the request body
    const formData = await request.json();
    const { firstName, lastName, email, company, description } = formData;

    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db("content"); // Replace with your actual DB name
    const collection = db.collection("contactRequests"); // Replace with your desired collection name

    // Insert the form data into the collection
    const result = await collection.insertOne({
      firstName,
      lastName,
      email,
      company,
      description,
      timestamp: new Date(), // Optional: add a timestamp
    });

    // Send a success response
    return NextResponse.json({ message: "Form data received and saved successfully", insertedId: result.insertedId });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

export const config = {
  runtime: "edge",
};
