import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
import fs from "fs";
import path from "path";

// MongoDB URI and client setup
const uri = "mongodb+srv://nickkane999:HCoIWW0AXKsb3vg3@cluster0.fjl9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Path to the JSON file
const jsonFilePath = path.join(process.cwd(), "data", "db-migration", "new-projects.json");

export async function POST() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db("content");
    const collection = db.collection("projects");

    // Read the JSON file
    const jsonData = fs.readFileSync(jsonFilePath, "utf8");
    const newProjects = JSON.parse(jsonData);

    // Loop through each project and insert it if it doesn't exist
    for (const project of Object.values(newProjects)) {
      const existingProject = await collection.findOne({ id: project.id });

      if (!existingProject) {
        await collection.insertOne(project);
        console.log(`Inserted project with id: ${project.id}`);
      } else {
        console.log(`Project with id: ${project.id} already exists`);
      }
    }

    // Send a success response
    return NextResponse.json({ message: "New projects added successfully" });
  } catch (error) {
    console.error("Error adding new projects:", error);
    return NextResponse.json({ message: "Error adding new projects" }, { status: 500 });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

export const config = {
  runtime: "edge",
};
