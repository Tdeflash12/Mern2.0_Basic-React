import React from 'react'
import "./Home.css"
const Home = ()=>{
    return(
     <>
   <nav class="navbar">
        <div className="container">
            <a href="#" class="logo">Your Logo</a>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div className="content">
        <h1>Welcome to Our Website!</h1>
        <p>This is a beautiful navbar example.</p>
    </div>
       </>     
  )  
}
export default Home