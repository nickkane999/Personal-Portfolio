import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { OpenAIAssistantRunnable } from "langchain/experimental/openai_assistant";
import { OpenAIFiles } from "langchain/experimental/openai_files";
import fs from "fs";
import path from "path";

export function openAI(maxTokens: number = 150): any {
  const openai = new OpenAI({
    model: "gpt-3.5-turbo-0125",
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
    maxTokens: maxTokens,
  });
  return openai;
}

export function openAIChat(maxTokens: number = 150): any {
  const openAI = new ChatOpenAI({
    model: "gpt-3.5-turbo-0125",
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
    maxTokens: maxTokens,
  });
  return openAI;
}

export async function openAIAssistantRunnable(directoryPath: string): Promise<any> {
  let files: string[] = [];
  try {
    const openAIFiles = new OpenAIFiles({
      clientOptions: {
        apiKey: process.env.OPENAI_API_KEY,
        organization: process.env.OPENAI_ORGANIZATION_KEY,
      },
    });

    const filenames = await fs.promises.readdir(directoryPath);
    for (const filename of filenames) {
      const filePath = path.join(directoryPath, filename);
      let tempfile = await openAIFiles.createFile({
        file: fs.createReadStream(filePath),
        purpose: "assistants",
      });
      files.push(tempfile.id);
      console.log("Reading file:", filename);
    }
    console.log("Filenames:", files);
  } catch (err) {
    console.error("Error reading directory:", err);
  }
  console.log("Files:", files);

  const assistant = await OpenAIAssistantRunnable.createAssistant({
    model: "gpt-3.5-turbo-0125",
    instructions: "You are a helpful assistant that provides answers to questions.",
    clientOptions: {
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.OPENAI_ORGANIZATION_KEY,
    },
    tools: [{ type: "retrieval" }],
    fileIds: files,
  });
  return assistant;
}
