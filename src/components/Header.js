import React from 'react';
import styled from  'styled-components';

export default function Header(props){
    // const {title} = props;
    const Headers = styled.div`
    h1{
        font-family: 'Chelsea Market', cursive;
        font-size: 2rem;
        color: black;
        padding-left: 2%;
        
    }
    h2{
    font-family: 'Chelsea Market', cursive;
    font-size: 4rem;
	color: black;
	padding-left: 2%;
}

a{
    text-decoration: none;
	background-color: rgb(179, 170, 170);
	padding: 1%;
	border-radius: 25%;
	margin: 0 1%;
    &:hover{
        background-color: rgb(11, 223, 57);
        transform:scale(2);
        transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;

header{
	background-color:#444c55;
}
nav{
	display:flex;
	flex-direction: row;
    justify-content:flex-start;
	margin: 1%;	
}

    `;

    return (
        <Headers>
            <div>
            <h1>Picture of The Day From</h1>
            </div>
            
            <section className="logo">
            <img src="https://stoic-jones-8cfd50.netlify.app/static/media/nasa-logo-web-rgb-1.43be7d63.png" alt="NASA Logo"></img>
            </section>
            <nav className="home-login-subscribe">
                <a href="index.html">HOME</a>
                <a href="index.html">LogIn/Out</a>
                <a href="index.html">Subscribe</a>
            </nav>
        </Headers>
    )
}
// export default Header;