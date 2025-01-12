import React, { useState, useEffect } from "react";
import "./../../css/Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="nav-box">
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
            <div className="navbar-logo">Suphaset</div>
            <ul className="navbar-menu">
                <li className="hover-underline-animation">
                    <HomeIcon fontSize="small"  sx={{ color: 'white' }} />
                    <a href="/">Home</a>
                </li>
                <li className="hover-underline-animation">
                    <PersonIcon fontSize="small"  sx={{ color: 'white' }} />
                    <a href="/about">About</a>
                </li>
                <li className="hover-underline-animation">
                    <AssignmentTurnedInIcon fontSize="small"  sx={{ color: 'white' }} />
                    <a href="/Project">Project</a>
                </li>
                <li className="hover-underline-animation">
                    <ContactPageIcon fontSize="small"  sx={{ color: 'white' }} />
                    <a href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
