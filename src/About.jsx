import React from "react";
import "./About.css"

const About = () =>{
    return (
        
        <>
         <header>
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo">Your Logo</a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="active">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="about-section">
        <div class="container">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla dui eu placerat porttitor. Nulla facilisi. In hac habitasse platea dictumst. Proin eleifend nibh id libero vehicula, sed aliquet libero euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus fermentum mauris sed ante interdum consequat. Aliquam malesuada sem sed ex convallis, eget rutrum ligula elementum.</p>
            <p>Suspendisse potenti. Fusce ut ultricies lectus. Integer nec diam ut augue dictum gravida a non eros. Curabitur feugiat nisi eu ultricies bibendum. Phasellus vel metus lacinia, suscipit eros in, ultricies purus. Donec id erat sit amet eros maximus ultricies. Nam lacinia lectus sed velit vestibulum vestibulum.</p>
        </div>
    </section>

    <footer class="footer">
        <div class="contained.r">
            <p>&copy;Abhesh Mandal</p>
        </div>
    </footer>
        
        
        
        </>
    )
}
export default About