import axios from "axios";
import { NextResponse } from "next/server";
import { env } from "../../env.mjs";

export async function GET(request: Request) {
  try {
    const response = await axios.get(env.DISCORD_URL, {
      headers: {
        Authorization: `${env.DISCORD_AUTH_TOKEN}`,
      },
    });

    const data = response.data;
    // console.log(data);
    // Process the data as needed
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" });
  }
}
