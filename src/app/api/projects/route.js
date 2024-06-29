import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

// function for get all projects 
export const GET = async()=>{
  //connect db
  const db = await connectDB()
  try {
    // get  projects collection
    const projectsCollection = await db.collection('projects')
    const result = await projectsCollection.find().toArray()
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}
// function for post on project collection  
export const POST = async(request)=>{
  //connect db
  const db = await connectDB()
  const project = await request.json()
  try {
    // get  projects collection
    const projectsCollection = await db.collection('projects')
    const result = await projectsCollection.insertOne(project)
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}

// const pr = [
//   {
//     "title":"Gadget Shop _ E-commerce application",
//     "image":"https://i.postimg.cc/Pr1Pxwgm/Screenshot-2024-06-29-135409.png",
//      "description":"Gadget Shop is an E-commerce website. In this website User can find various types of gadgets and accessories, also user can search their favorite gadgets. User can add their favorite gadgets in their cart and can checkout after giving delivery information.__ This website have admin panel admins can manage this website like add gadgets, remove gadgets, update gadgets and manage user. This website have review system like users can give a feedback and see other feedbacks of other users ",
//      "techs":["HTML, CSS, Tailwind CSS, Java Script, React JS, React Router Dom, Google Firebase , Node JS , Express JS, MongoDB,JWT "],
//      "features":[
//       "User login, register and Logout",
//       "User role base access ",
//       "Admin Panel",
//       "Payment System",
//       "Pagination functionality ",
//       "Search functionality",
//       "Feedback system",
//      ],
//      "live":"https://e-commerce-shop-88710.web.app/",
//      "clientRepo":"https://github.com/hasanredoy/E-commerce-Website-Client-Server-sides",
//      "serverRepo":"null",

//   },
  // {
  //   "title":"Learn Mentor Gate _ online study application",
  //   "image":"https://i.postimg.cc/WbdwfXJs/Screenshot-2024-06-29-001141.png",
  //    "description":"Learn Mentor Gate is an online study website. In this website User can find various types of online courses. User can buy their favorite course by paying the course fee.In this website any user can request for become Teacher, after go through a simple survey, if admin approves his/her teacher request then he/she will be consider as teacher in this website. Then they can add class from their dashboard if admin approves class then teachers can add assignment for specific class.__ This website have admin panel, admins can manage this website like approve class, make user admin , remove user and etc.",
  //    "techs":["HTML, CSS, Tailwind CSS, Java Script, React JS, React Router Dom, Google Firebase , Node JS , Express JS, MongoDB,JWT "],
  //    "features":[
  //     "User login, register and Logout",
  //     "User role base access ",
  //     "Teacher panel",
  //     "Admin Panel",
  //     "Payment System",
  //     "Pagination functionality ",
  //     "Feedback system",
  //    ],
  //    "live":"https://learn-mentor-gate.web.app/",
  //    "clientRepo":"https://github.com/hasanredoy/Learn_Mentor_Gate_Client",
  //    "serverRepo":"https://github.com/hasanredoy/Learn_Mentor_Gate_Server",

  // },
// ]