import React from 'react'
import "./style.css"
// import pic from "../Images/My project-1 (2).png"
import css from "../Images/css3.png"
import js from "../Images/javascript.png"
import html from "../Images/html.png"
import react from "../Images/react.png"
import mongodb from "../Images/mongodb.png"
import nodejs from "../Images/nodejs.png"
import redux from "../Images/redux.png"
import dev from "../Images/webDev.png"
import LaunchIcon from '@mui/icons-material/Launch';
import cv from "../Screens/SHAHEER'S RESUME.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { GitHub } from '@mui/icons-material'
import ForeverFashion from "../Images/logo.png"
import StarPoint from "../Images/StarPoint.png"
import NitroChat from "../Images/NitroChat.png"
import KhanaSabKayLiye from "../Images/KhanaSabKayLiye.png"
const Home = () => {

  AOS.init();

//     // "site": "shaheershahzad",


const skills =[
  {img:html,alt:"html",name:"HTML"},
  {img:css,alt:"css",name:"CSS"},
  {img:js,alt:"JAVASCRIPT",name:"JAVASCRIPT"},
  {img:react,alt:"react",name:"REACT JS"},
  {img:redux,alt:"redux",name:"REDUX"},
  {img:mongodb,alt:"mongodb",name:"MONGO DB"},
  {img:nodejs,alt:"nodejs",name:"NODE JS"},

]

const projects = [
  { title:"Forever Fashion", img:ForeverFashion ,githubLink:"https://github.com/ShaheerShahzadOfficial/Fashion-Forever",DeployedUrl:"https://theforeverfashion.com/",type:"React Js" },
  { title:"Nitro Chat", img:NitroChat,githubLink:"https://github.com/ShaheerShahzadOfficial/Nitro-Chat",DeployedUrl:"https://nitrochat.vercel.app/",type:"React Js" },
  { title:"Star Point",img:StarPoint,githubLink:"https://github.com/ShaheerShahzadOfficial/Star-Point",DeployedUrl:"https://starpoint.vercel.app/",type:"React Js" },
  { title:"Khana Sab Kay Liye",img:KhanaSabKayLiye,githubLink:"https://github.com/ShaheerShahzadOfficial/khanasabkayliye-reactnativecli",DeployedUrl:"https://github.com/ShaheerShahzadOfficial/khanasabkayliye-reactnativecli",type:"React Native App" },
  { title:"Record Management System",githubLink:"https://github.com/ShaheerShahzadOfficial/ExpenseTracker",DeployedUrl:"https://expensetrackerappproject.netlify.app/",type:"React Js" },
  { title:"E-Commerce",githubLink:"https://github.com/ShaheerShahzadOfficial/E-commerce",DeployedUrl:"https://github.com/ShaheerShahzadOfficial/E-commerce",type:"Nodejs . Api" },
  { title:"Record Management",githubLink:"https://github.com/ShaheerShahzadOfficial/Record_Management_System-Backend",DeployedUrl:"https://github.com/ShaheerShahzadOfficial/Record_Management_System-Backend",type:"Nodejs . Api" },
  { title:"Hotel Management System",githubLink:"https://github.com/ShaheerShahzadOfficial/Hotel_Management_System",DeployedUrl:"https://github.com/ShaheerShahzadOfficial/Record_Management_System-Backend",type:"Nodejs . Api" },
]


  return (
    <div>

<div className="About"  data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="350"
>
    <div data-aos="flip-left">
<h2> I'M   <span>  Shaheer Shahzad </span> </h2>

<h2 className='h2'>Mern Stack & Web Developer</h2>

<br />
<div className='FindMe'>
                        <h3>Contact Me On</h3>
                        <div className='FindMeLinks'>
                            <a href="https://github.com/ShaheerShahzadOfficial" target={"_blank"} rel="noreferrer" >  <i className="fa fa-github  link"  > </i>  </a>
                            <a href="https://www.instagram.com/shaheer_shahzad01" target={"_blank"} rel="noreferrer" >          <i className="fa fa-instagram  link" >   </i> </a>
                            <a href="https://www.linkedin.com/in/mohammedshaheershahzad/" target={"_blank"} rel="noreferrer" >  <i className="fa fa-linkedin-square  link">  </i></a>
                            <a href="https://wa.me/923072033276" target={"_blank"} rel="noreferrer" > <i className="fa fa-whatsapp  link" >   </i>  </a>
                            <a href="https://www.facebook.com/MohammedShaheerShahzadofficial" target={"_blank"} rel="noreferrer" >    <i className="fa fa-facebook-square  link" >  </i> </a>
                        </div>
                    </div>


<a download href={cv}> <button>Hire Me</button>
 </a>



    </div>
{/* <div className="ProfilePic" data-aos="flip-left">
<img src={pic} alt="Profile" />
</div> */}


</div>

<br />


<div className="AboutMe" data-aos="zoom-in-up">

<div className="img" data-aos="flip-left">
<img src={dev} alt="Developer" />
</div>


  <div className="p"  data-aos="fade-up">
  <h1>About</h1>

<h2> 
- 💪🏻 Enthusiastic Mern Stack Developer <br /> <br />
 -🌱 I’m currently learning BlockChain(smart contracts) <br /><br />
 -👀 I am interested in BlockChain and Machine Learning <br /><br />
 -💞️ Always looking forward to collaborate on projects<br /><br />
 -💻 Dedicated to Work and seeking Experiences <br /><br />
 -A passionate Mern-Stack Developer from Karachi, Pakistan  
</h2>
  </div>



</div>

<br /><br />


<div className="Skills">

<h1>My Skills</h1>


<div className="skills">

{skills.map((item,i)=>(
  <div data-aos="flip-left" data-aos-duration="2000" data-aos-delay="200" key={i} className='skillsContainer'>
    <img src={item.img} alt={item.alt} />
    <h2>{item.name}</h2>
  </div>
))}

</div>


</div>

<br /><br />

<div className="Project">

<h1>My Projects</h1>

<div className="Projects">

{
  projects.map((item,i)=>(
    <div key={i} className="ProjectContainer" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
    {
      item?.img && <img src={item.img} alt={item.title} />
    }
    <h2>{item.title}</h2>
    <h3>{item.type}</h3>
    <a href={item.DeployedUrl} target="_blank" rel="noreferrer"> <LaunchIcon/> </a>
<a href={item.githubLink} target="_blank" rel="noreferrer"> <GitHub/> </a>
    </div>
  ))
}
</div>

</div>


<footer title='shaheershahzad'>
  <h1>CopyRight @ Shaheer Shahzad</h1>
</footer>

    </div>
  )
}

export default Home