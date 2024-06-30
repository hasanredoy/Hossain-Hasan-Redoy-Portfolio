import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

// function for post on project collection  
export const POST = async(request)=>{
  //connect db
  const db = await connectDB()
  const massage = await request.json()
  try {
    // get  projects collection
    const massageCollection = await db.collection('massages')
    const result = await massageCollection.insertOne(massage)
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}