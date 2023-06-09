import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/sports.json";

export async function GET(req: Request, res: NextApiResponse) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
