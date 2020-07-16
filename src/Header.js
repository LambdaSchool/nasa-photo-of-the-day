import React from 'react'

const Header = props => {

    return (
    <header className = "App-header">
        <img 
            alt = 'NASA logo'
            src = 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'
            className = "Nasa-logo"
        />
        <h1>IMAGE OF THE DAY</h1>
        <img
            alt = 'react logo'
            src = 'logo512.png'
            className = "App-logo"
        />
        </header>
    
    )
}


export default Header