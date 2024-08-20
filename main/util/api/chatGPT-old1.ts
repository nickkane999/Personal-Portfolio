import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

export async function getAnswer(sample: string): Promise<string> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  let max_tokens = 10;
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [{ role: "user", content: sample }],
    max_tokens: max_tokens,
    stream: true,
  });

  let answer = "";
  for await (const chunk of stream) {
    const currentChunkContent = chunk.choices[0]?.delta?.content || "";
    answer += currentChunkContent;
  }

  return answer;
}

export async function getAnswerFromDocument(sample: string, documentId: string): Promise<string> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  // Iterate through files in the documentPath directory
  const filePaths = fs.readdirSync(documentPath);
  const uploadedFileIds = await Promise.all(
    filePaths.map(async (fileName) => {
      const filePath = path.join(documentPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, "binary");
      const fileBlob = new Blob([fileContent], { type: "text/plain" }); // Adjust content type as needed
      const uploadResult = await openai.files.create({
        file: fileBlob,
        purpose: "assistants",
      });
      return uploadResult.data.id; // Return the uploaded file ID
    })
  );

  let max_tokens = 10;
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [{ role: "user", content: sample }],
    max_tokens: max_tokens,
    stream: true,
    files: uploadedFileIds,
  });

  let answer = "";
  for await (const chunk of stream) {
    const currentChunkContent = chunk.choices[0]?.delta?.content || "";
    answer += currentChunkContent;
  }

  return answer;
}

export async function uploadFilesInDirectory(directoryPath: string) {
  console.log("Uploading files " + directoryPath);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  // Iterate through files in the directoryPath directory
  const filePaths = fs.readdirSync(directoryPath);
  console.log(filePaths);

  const uploadedFileIds = await Promise.all(
    filePaths.map(async (fileName: string) => {
      const filePath = path.join(directoryPath, fileName);
      const fileContent = await fs.promises.readFile(filePath);
      const fileExtension = (fileName.split(".").pop() || "").toLowerCase();
      let contentType;
      switch (fileExtension) {
        case "xlsx":
          contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
          break;
        case "docx":
          contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
          break;
        case "pdf":
          contentType = "application/pdf";
          break;
        default:
          contentType = "application/octet-stream"; // Default to generic binary type for unknown extensions
      }

      // Create a ReadableStream from the file content
      const fileStream = fs.createReadStream(filePath);

      const uploadResult = await openai.files.create({
        file: fileStream,
        purpose: "assistants",
      });
      console.log(uploadResult);
      return uploadResult.id;
    })
  );
  console.log("Uploaded file IDs:", uploadedFileIds);

  return uploadedFileIds;
}

export async function uploadFiles(file: File) {
  console.log("Uploading file " + file.name);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  // Upload file to OpenAI
  const uploadResult = await openai.files.create({
    file: file,
    purpose: "assistants",
  });
  console.log("Upload result:", uploadResult);
  return uploadResult.id;
}

export async function listFiles() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  const file_list = await openai.files.list();
  console.log(file_list);

  return file_list;
}

export async function removeFiles() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
  });

  const file_list = await openai.files.list();

  for (const file of file_list.data) {
    const response = await openai.files.delete(file.id);
    console.log(response);
  }

  const new_file_list = await openai.files.list();
  console.log(new_file_list);

  return true;
}
