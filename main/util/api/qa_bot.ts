import { OpenAI } from "@langchain/openai";
import { openAI } from "@/util/api/openai";
import fs from "fs";
import path from "path";

export async function uploadFiles(file: File) {
  console.log("Uploading file " + file.name);
  const openai = openAI();

  // Upload file to OpenAI
  const uploadResult = await openai.files.create({
    file: file,
    purpose: "assistants",
  });
  console.log("Upload result:", uploadResult);
  const data = {
    id: uploadResult.id,
    name: file.name,
  };
  return data;
}

export async function listFiles() {
  const openai = openAI();

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
