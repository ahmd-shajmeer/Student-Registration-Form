import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { registerAPI } from "../Services/allAPI";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate()
  const [studentData,setStudentData] = useState({
    firstname:"",lastname:"",address:"",email:"",number:"",gender:"",dob:"",course:"",password:""
  })
  const [genderSelection,setGenderSelection] = useState("")

  const handleGender = (e) =>{
    setGenderSelection(e.target.value)
  }

  useEffect(() =>{
    setStudentData({...studentData,gender:genderSelection})
  },[genderSelection])

  const handleRegister = async () =>{
    const {firstname,lastname,address,email,number,gender,dob,course,password}= studentData
        if(!firstname || !lastname || !address || !email || !number || !gender || !dob || !course || !password){
            alert("Fill the form completelly!!")
        }else{
            try{
              const result = await registerAPI(studentData)
              if(result.status===200){
                alert("Registered Successfull")
                setTimeout(()=>{
                  navigate("/studentdetails")
                })
              }else{
                console.log(result.response.data);
              }
            }catch(err){
              console.log(err);
            }
        }
  }

  const handleCancel = () =>{
    setStudentData({
      firstname:"",lastname:"",address:"",email:"",number:"",gender:"",dob:"",course:"",password:""
    })
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className="container mt-3">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstname" class="form-label">
              FIRST NAME
            </label>
            <input type="text" class="form-control border rounded" id="firstname" onChange={e=>setStudentData({...studentData,firstname:e.target.value})} />
          </div>
          <div class="col-md-6">
            <label for="lastname" class="form-label">
              LAST NAME
            </label>
            <input type="text" class="form-control border rounded" id="lastname" onChange={e=>setStudentData({...studentData,lastname:e.target.value})} />
          </div>
          <div class="col-12">
            <label for="address" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
               onChange={e=>setStudentData({...studentData,address:e.target.value})}
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">
              EMAIL
            </label>
            <input type="email" class="form-control border rounded" id="email" onChange={e=>setStudentData({...studentData,email:e.target.value})} />
          </div>
          <div class="col-md-6">
            <label for="phonenumber" class="form-label">
              MOBILE NUMBER
            </label>
            <input type="number" class="form-control border rounded" id="phonenumber" onChange={e=>setStudentData({...studentData,number:e.target.value})} />
          </div>
          <div class="col-md-2">
            <label className="form-label">GENDER</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="male"
                value="Male"
                name="gender"
                checked={genderSelection === "Male"}
                onChange={handleGender}
              />
              <label className="form-check-label" for="male">
                MALE
              </label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="Female"
                 name="gender"
                 checked={genderSelection === "Female"}
                 onChange={handleGender}
              />
              <label class="form-check-label" for="female">
                FEMALE
              </label>
            </div>
          </div>
          <div className="col-md-2">
            <label className="form-label">DATE OF BIRTH</label>
            <input className="form-control border rounded" type="date" name="dob" onChange={e=>setStudentData({...studentData,dob:e.target.value})} />
          </div>
          <div class="col-md-4">
            <label for="course" class="form-label">
              COURSE
            </label>
            <select id="course" class="form-select border rounded" onChange={e=>setStudentData({...studentData,course:e.target.value})}>
              <option value={'Select a course'} hidden>Select a course</option>
              <option>Biology</option>
              <option>Computer Science</option>
              <option>Commerce</option>
              <option>Humanities</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="password" class="form-label">
              PASSWORD
            </label>
            <input type="password" class="form-control border rounded" id="password" onChange={e=>setStudentData({...studentData,password:e.target.value})} />
          </div>
          <div class="col-12 ">
            <button onClick={handleRegister}  class="btn btn-primary me-3">
              REGISTER
            </button>
            <button onClick={handleCancel} class="btn btn-danger">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
