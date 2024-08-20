import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Read the tasks data from the JSON file
    const filePath = path.join(process.cwd(), "data/tasks.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const cachedTasks = JSON.parse(jsonData); // Cache data for future use

    // Send the tasks data in the response
    return NextResponse.json(cachedTasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ message: "Error fetching tasks" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    console.log("hello from contact apizzzz");
    // Get the form data from the request body
    const formData = await request.json();
    const { id, title, description, startDate, endDate, estimatedTime, hidden } = formData;

    // Read the existing tasks data from the JSON file
    const filePath = path.join(process.cwd(), "data/tasks.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const tasks = JSON.parse(jsonData);
    console.log(formData);

    // Find the index of the task with the provided ID
    let taskIndex = Object.keys(tasks).findIndex((key) => {
      console.log(key);
      console.log(id);
      return key == id;
    });

    // If the task with the provided ID is found, update its properties
    if (taskIndex !== -1) {
      console.log("hello from contact apizzz");
      let taskIndexString = (taskIndex + 1).toString();
      tasks[taskIndexString] = {
        id,
        title,
        description,
        startDate,
        endDate,
        estimatedTime,
        hidden,
      };

      // Write the updated tasks data back to the JSON file
      await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8");

      // Send a success response
      return NextResponse.json({ message: "Task updated successfully" });
    } else {
      // If the task with the provided ID is not found, send a 404 response
      NextResponse.json({ message: "Form data received and saved successfully" });
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({ message: "Error updating task" }, { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
