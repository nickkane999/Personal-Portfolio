// pages/api/projects.ts
import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB URI and client setup
const uri = "mongodb+srv://nickkane999:HCoIWW0AXKsb3vg3@cluster0.fjl9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET(request: Request) {
  try {
    // Connect to MongoDB, select the database and collection
    await client.connect();
    const db = client.db("content"); // Replace with your actual DB name
    const collection = db.collection("projects");

    // Do not return hidden records if specified in query parameter
    const url = new URL(request.url);
    const showHidden = url.searchParams.get("showHidden") === "true";
    const query: Record<string, any> = {};
    if (!showHidden) {
      query.hidden = false;
    }

    // Retrieve the projects
    const projects = await collection.find(query).toArray();
    return NextResponse.json(projects);
  } catch (error) {
    // Report error if it's thrown
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: "Error fetching projects" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const projectData = await request.json();

    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db("myPortfolioDB"); // Replace with your actual DB name
    const collection = db.collection("projects");

    // Insert the new project into the database
    const result = await collection.insertOne(projectData);

    // Send a success response
    return NextResponse.json({ message: "Project added successfully", insertedId: result.insertedId });
  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json({ message: "Error adding project" }, { status: 500 });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

export const config = {
  runtime: "edge",
};
