import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{
  const db = await connectDB()
  try {
    const skillsCollection = await db.collection('skills')
    const result = await skillsCollection.find().toArray()
    return NextResponse.json({result})
  } catch (error) {
    console.log(error);
  }
}