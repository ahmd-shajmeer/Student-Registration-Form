import React from 'react'
import Header from '../Components/Header'
import highschool from '../assets/Images/highschool.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
<Header/>
<div style={{width:'100%',height:'100vh',backgroundImage:`linear-gradient(90deg, rgba(251,251,251,1) 49%, rgba(250,250,250,0) 87%),url(${highschool})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
<div style={{height:'100%'}} className="container">
            <div style={{height:'100%'}} className="row align-items-center">
                <div className="col-lg-5">
                    <h1>EDUCARE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, maxime fugit? Facilis autem nulla, neque sequi beatae in eum dicta numquam deleniti illum, repellendus ullam.</p>
                    <button className="btn btn-primary rounded-3"><Link style={{textDecoration:'none',color:'white'}} to={'/register'}>REGISTER</Link></button>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                </div>
            </div>
        </div>
</div>
</>
    
  )
}

export default Home