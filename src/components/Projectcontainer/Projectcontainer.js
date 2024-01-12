
import React from 'react'
import { Element } from 'react-scroll';
import Project from './Project/Project';
import './Projectcontainer.css';
import sunpower from '../../assets/sunpower.PNG';
import LoginForm from '../../assets/Login-Form.PNG';


const Projectcontainer = () => {

    const projects = [
         {
            img: sunpower,
            title:"sunpowerenergy",
            desc:"Utilized HTML for structuring the content of the website. Employed CSS for styling and layout enhancements. Integrated Bootstrap for responsive and mobile-friendly design elements. Implemented JavaScript for scripting functionalities and client-side validation.",
            link:"http://sunpowerenergy.lovestoblog.com",
        },
        {
            img:LoginForm,
            title:"LoginForm",
            desc:"FrontEnd:Developed the user interface using HTML and styled it with CSS to create an intuitive and visually appealing design, Backend:Implemented the backend functionality using PHP to handle dynamic content, user authentication, and server-side processing, DataBase:Mysql",
            link:"http://online-form.great-site.net/",
        },
        {
            img:"https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=740&t=st=1695229371~exp=1695229971~hmac=dca20a6eed793ad4c8af68606833865c2e6873a57bb40e33d976757020b9ab62",
            title:"Facebook",
            desc:"You can really appreciate the beauty of our natural world through these stunning 4K wallpaper compositions. From mountains to still lakes, they will provide a sense of calm to your personal blog, commercial banner, and website projects.",
            link:"https://www.w3schools.com",
        },
        {
            img:"https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=740&t=st=1695229371~exp=1695229971~hmac=dca20a6eed793ad4c8af68606833865c2e6873a57bb40e33d976757020b9ab62",
            title:"Facebook",
            desc:"You can really appreciate the beauty of our natural world through these stunning 4K wallpaper compositions. From mountains to still lakes, they will provide a sense of calm to your personal blog, commercial banner, and website projects.",
            link:"https://www.w3schools.com",
        },
        {
            img:"https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=740&t=st=1695229371~exp=1695229971~hmac=dca20a6eed793ad4c8af68606833865c2e6873a57bb40e33d976757020b9ab62",
            title:"Facebook",
            desc:"You can really appreciate the beauty of our natural world through these stunning 4K wallpaper compositions. From mountains to still lakes, they will provide a sense of calm to your personal blog, commercial banner, and website projects.",
            link:"https://www.w3schools.com",
        },
        {
            img:"https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=740&t=st=1695229371~exp=1695229971~hmac=dca20a6eed793ad4c8af68606833865c2e6873a57bb40e33d976757020b9ab62",
            title:"Facebook",
            desc:"You can really appreciate the beauty of our natural world through these stunning 4K wallpaper compositions. From mountains to still lakes, they will provide a sense of calm to your personal blog, commercial banner, and website projects.",
            link:"https://www.w3schools.com",
        },
    ]
  return (
    
   <Element className='projectcontainer' id='projects'>
    
    <h1> My Projects</h1>
    <p> There are some projects that I have successfully completed using the following tools: HTML, CSS, JavaScript, Bootstrap, React.js, as well as backend processing with PHP and MySQL </p>
    <div className='projectcontainer__projects'>
        {
            projects.map((project, index)=>{
                return(
                    <Project
                    key={index}
                    img={project.img}
                    title={project.title}
                    desc={project.desc}
                    link={project.link}
                  />
                )
            })

        }

    </div>
   </Element>
  )
}

export default Projectcontainer;
