import fs from "fs";
import path from "path";

export function writeToTextFile(formDataString: string, filePath: string): void {
  // Create the data directory if it doesn't exist
  const dataDir = path.dirname(filePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the form data to the specified file path
  fs.appendFileSync(filePath, formDataString);
}
