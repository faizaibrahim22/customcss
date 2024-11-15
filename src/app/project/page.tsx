import React from "react";
import Image from "next/image";

const Projects = () => {
    return (
        <div>
            <h1 className="heading">My Project</h1>
            <div className="project">
                <h2 className="pro-h2">
                    Here are some of my Projects
                    <p>
                        Here are some of the projects I've worked on. Click on them to learn more.
                    </p>
                </h2>
                <div className="main">
                    <Image
                        alt="post"
                        src="/photo/todo.PNG"
                        width={600}
                        height={300}
                    />
                    <Image
                        alt="post"
                        src="/photo/cv.jpg"
                        width={600}
                        height={300}
                    />

                    <Image src="/photo/to.jpg"
                    alt="Description"
                    width={500} 
                    height={300} />
                    <Image
                        src="/photo/pro.jpg"
                        alt="Description"
                        width={500}
                        height={300} />

                </div>
            </div>
        </div>
    )
}


export default Projects
