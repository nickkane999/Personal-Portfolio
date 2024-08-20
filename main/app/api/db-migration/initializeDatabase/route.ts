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
const jsonFilePath = path.join(process.cwd(), "data", "db-migration", "projects.json");

export async function POST() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db("content"); // Replace with your actual DB name
    const collection = db.collection("projects");

    // Read the JSON file
    const jsonData = fs.readFileSync(jsonFilePath, "utf8");
    const data = JSON.parse(jsonData);

    // Insert the data into the collection
    const result = await collection.insertMany(Object.values(data));

    // Send a success response
    return NextResponse.json({ message: "Data loaded successfully", insertedCount: result.insertedCount });
  } catch (error) {
    console.error("Error initializing database:", error);
    return NextResponse.json({ message: "Error initializing database" }, { status: 500 });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

export const config = {
  runtime: "edge",
};
