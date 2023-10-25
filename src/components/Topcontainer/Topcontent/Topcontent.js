
import React from 'react'
import { Link } from 'react-scroll';
import './Topcontent.css'
import DownloadCV from '../../../assets/Devipriya-CV.pdf';

const Topcontent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent__container'>
            <h1>
            <span>M</span>
            <span>s</span>
            <span>.</span>    
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>P</span>
            <span>r</span>
            <span>i</span>
            <span>y</span>
            <span>a</span>
            <span> </span>
            <span>V</span>
            <span>e</span>
            <span>n</span>
            <span>k</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
            <span>a</span>
            <span>n</span>
        </h1>


{/* <h1>Ms. DeviPriya <span>Venkatesan</span> </h1>  */}
                
                <p>Fullstack Web Developer</p>
                <a href={DownloadCV}>
                    <button className='topcontent__downloadbtn'>Download CV</button>
                </a>
                <Link to='project'smooth={true} duration={500}>
                    <button className='topcontent__myworkbtn'> My Work</button>
                </Link>

            </div>
        </div>
    )
}

export default Topcontent
