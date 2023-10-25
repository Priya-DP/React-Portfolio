
import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import Model from './Model';
import {FiX, FiMenu} from 'react-icons/fi';

const Header = () => {
    const [showmodel, setShowmodel] = useState(false);
    const [open, setOpen] = useState(false);
    const handleclick = () => setOpen(!open);
    const closeMenu = () => setOpen(false); 
    

    return (
        <div className='header'>
            
            <div className='header__left'>
                <h1>Full Stack <span>Web Developer</span></h1>
            </div>
            <div className='header_icon'  onClick={handleclick}>
                {open ? <FiX /> : <FiMenu />} 
            </div>


{/* Navbar Link    */}

            <div className={open ? 'header__right active' : 'header__right'}>
                <Link  to='Topcontainer' smooth={true} duration={500}  onClick={closeMenu} >
                    <h4>Home</h4>
                </Link>
                <Link to='Aboutcontainer' smooth={true} duration={500}   onClick={closeMenu}>
                    <h4>About</h4>
                </Link>
                <Link to='project' smooth={true} duration={500}   onClick={closeMenu}>
                    <h4>Project</h4>
                </Link>
                <Link to='Contactcontainer' smooth={true} duration={500}  onClick={closeMenu}>
                    <h4>Contact </h4>
                </Link>


                <div>
                    <button className='btn' onClick={() => setShowmodel(true)}>Join with me</button>
                    {showmodel && (
                        <Model
                            title={<p><span>Hello Friends</span></p>}
                            content={<p><span>Want to join with me, go to the contact page and submit your details. I'll get in touch with you as soon as possible.</span></p>}
                            close={setShowmodel}
                        />
                                 )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;