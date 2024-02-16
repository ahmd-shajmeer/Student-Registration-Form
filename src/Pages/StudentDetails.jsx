import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { studentDataAPI } from "../Services/allAPI";

function StudentDetails() {
  const [studentDetails,setStudentDetails] = useState()
  
  const getAllStudents = async () =>{
    const result = await studentDataAPI()
    if(result.status===200){
      setStudentDetails(result.data)
    }else{
      console.log(result);
    }
  }

  useEffect(() =>{
    getAllStudents()
  },[])
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Student Details</h1>
        <div>
          <table className="table border rounded">
            <thead>
              <tr >
               <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">DOB</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
             {  
               studentDetails?.map((student,index)=>(
                 <tbody key={index}>
                <tr>
                <th scope="row">{index+1}</th>
                <th>{student?.firstname}</th>
                <td>{student?.lastname} </td>
                <td>{student?.address} </td>
                <td>{student?.email}</td>
                <td>{student?.number} </td>
                <td>{student?.dob} </td>
                <td>{student?.course} </td>
              </tr>
                </tbody>
               )) }
          </table>
        </div>
        <div className="col-md-12">
            <button className="btn btn-primary"><Link style={{textDecoration:'none',color:'black'}} to={'/'}>BACK</Link></button>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
