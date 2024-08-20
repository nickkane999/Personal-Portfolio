// Purely created for testing purposes, an example of how to use the API routes in Next.js
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  console.log("hello from contact api 1");
  const data = await request.json();
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
