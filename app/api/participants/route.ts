import sampleData from "../../../data/sample.json";
import { NextResponse } from "next/server";

export type ApiResponse<T> = T | { error: string };

export type Participant = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  participant_id: string;
};

export async function GET() {
  try {    
    return NextResponse.json(sampleData);
  } catch (error) {
    return NextResponse.json({ error: "Error retrieving data" });
  }
}

