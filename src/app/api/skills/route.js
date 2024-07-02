import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

// get all skills
// accessories
export const GET = async () => {
  const db = await connectDB();
  try {
    const skillsCollection = await db.collection("skills");

    const result = await skillsCollection
      .aggregate([
        {
          // add fields convertIndexToNum as doubled index
          $addFields: {
            convertIndexToNum: { $toDouble: "$index" },
          },
        },
        {
          // sort convertIndexToNum by ascending ways
          $sort: { convertIndexToNum: 1 },
        },
      ])
      .toArray();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
    // console.log(error);
  }
};
export const POST = async (request) => {
  const db = await connectDB();
  const skill = await request.json();
  try {
    const skillsCollection = await db.collection("skills");
    const result = await skillsCollection.insertOne(skill);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
    // console.log(error);
  }
};
