import React from 'react'
import '../static/css/Navbar.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <ul className="nav-list">
                {/* <div className="logo"><img src="https://source.unsplash.com/Y9MoiZi9Rbg/400x400" alt="logo"/></div> */}
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="right-nav">
                <input type="text"/>
                <button className="btn-sm">Search</button>
            </div>
        </div>
    )
}

export default Navbar
