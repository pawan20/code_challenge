import { NextApiRequest} from "next";
import sampleData from "../../../../data/sample.json";
import { NextResponse } from "next/server";

export type ApiResponse<T> = T | { error: string };

export async function GET(req: NextApiRequest, context: any) {    
  const { params } = context;
  if(params.participantId === "" || params.participantId === null){
    return NextResponse.json(sampleData);
  }
  const participant: any = sampleData.filter(
    (item) =>  
    item.first_name
    .toLowerCase()
    .includes(params.participantId.toLowerCase()) ||
    item.last_name.toLowerCase().includes(params.participantId.toLowerCase()) ||
    item.email.toLowerCase().includes(params.participantId.toLowerCase()) ||
    item.participant_id.includes(params.participantId)
  );

  return NextResponse.json(participant);
}
