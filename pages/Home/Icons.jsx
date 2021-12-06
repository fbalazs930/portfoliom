import React, { useEffect, useState } from 'react';

export const Icons = () => {
    const [color, setColor] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50 && window.innerWidth >= 940) {
                setColor(false);
            }
            else {
                setColor(true);
            }
        });
    }, [])
    return (
        <div className='icons'>
            <a target='_blank' href="https://www.linkedin.com/in/f-balazs/" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fab fa-linkedin-in"></i>
            </a>
            <a target='_blank' href="https://github.com/fbalazs930" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fab fa-github"></i>
            </a>
            <a target='_blank' href="mailto:fbalazs930@gmail.com" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fas fa-envelope"></i>
            </a>
            <a target='_blank' href="tel:06203370852" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fas fa-phone-alt"></i>
            </a>
        </div>
    )
}
