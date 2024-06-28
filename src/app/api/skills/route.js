import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

// get all skills 
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
export const POST=async(request)=>{
  const db = await connectDB()
  const skill =await request.json()
  try {
    const skillsCollection = await db.collection('skills')
    const result = await skillsCollection.insertOne(skill)
    return NextResponse.json({result})
  } catch (error) {
    console.log(error);
  }
}