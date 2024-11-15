import React from "react";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";




const About = () => {
    return (
        <>
            <h1 className="heading">About Me</h1>
            <Image
                src="/photo/picks.jpg"
                alt="picks2"
                width={200}
                height={210}
                className="img2"
            />
            <h2 className="name"></h2>
            <p>
                Hi, I’m Faiza  a web developer and computer science student with a strong passion for building modern,
                fast, and dynamic web applications.
                Specializing in Next.js, along with core web technologies like HTML, CSS, JavaScript, and frameworks like React
                and Node.js, I focus on creating user-friendly,
                responsive websites that deliver high performance and smooth user
                experiences.As a computer science student, I leverage my academic
                background to deepen my understanding of both front-end and back-end development. I enjoy using Next.js to build server-side rendered (SSR) applications and static websites that are SEO-friendly and lightning-fast.
                Whether it’s a full-fledged web application or a personal project, I’m always excited to tackle new challenges and turn creative ideas into functional solutions.
            </p>

            <div className="btn"></div>
            <button className="bt3">
            <IoLogoLinkedin  className="icons"/>
            </button>
            <button className="bt3">
            <FaSquareGithub className="icons" />
            </button>
            <button className="bt3">
            <FaPhoneAlt className="icons"/> 
            </button>
            <button className="bt3">
            <FaWhatsappSquare className="icons"/>
            </button>
               
          <Skills/>
        </>
    )
}

export default About;


export const Skills=()=>{
    return(
        <div>
          <div>
            <h2 className=" text-start">
             MY Skills</h2>
             <button className="bt4">
            <FaHtml5 className="icon" />
            </button>
            <button className="bt4">
            <IoLogoJavascript className="icon1" />
            </button>
            <button className="bt4">
            <SiTypescript  className="icon2"/>
            </button>
           <button className="bt4">
           <FaCss3Alt  className="icon3"/>

           </button>
           <button className="bt4">
           <RiNextjsFill className="icon4" />

           </button>
          </div>
        </div>
    )
}