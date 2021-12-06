import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";

export const Nav = () => {
    //#region Menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => { setClick(false) };
    useEffect(() => {
        window.addEventListener('resize', () => {
            setClick(false);
            if (window.innerWidth < 768) {
            }
        });
    }, [])
    //#endregion

    //#region NavBg
    const [scrollY, setScrollY] = useState(0);
    function getY() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", getY);
        return () => {
            window.removeEventListener("scroll", getY);
        };
    });
    const nav = {
        background: `rgba(23, 37, 42, ${scrollY / 600})`,
        boxShadow: `0 3px 6px -2px rgba(20, 20, 20, ${scrollY / 600})`
    };
    //#endregion

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className="nav" style={nav}>
            <i onClick={scrollToTop} className="logo fab fa-wolf-pack-battalion"></i>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link onClick={closeMenu} className="nav-link" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                    Munkáim
                </Link>
                <Link onClick={closeMenu} className="nav-link" to="cv" spy={true} smooth={true} offset={-100} duration={500}>
                    Önéletrajz
                </Link>
                <Link onClick={closeMenu} className="nav-link" to="about" spy={true} smooth={true} offset={-90} duration={500}>
                    Rólam
                </Link>
                <Link onClick={closeMenu} className="nav-link" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    Kapcsolat
                </Link>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
    )
}
