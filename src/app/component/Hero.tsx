import React from "react";
import Image from "next/image"
import Link from "next/link";
const Hero =()=>{
    return(
        <div className="hero">
            <div className="img-div">

            </div>
          <Image  
            src="/photo/picks.jpg"
            alt="photo"
            width={300}
            height={210}
            className="rounded-lg"

            />
            <div className="infor-div">
                <h1 className="name"> Hello <br /> I  am  <br /> Faiza M.Ibrahim Qureshi </h1>
                <div className="btn2">
                    <button  className="bt"><Link href="/About"> </Link>
                    About 
                    </button>
                    <button className="bt"><Link  href="/Contact"></Link>
                    Contact
                    </button>
                </div>
            </div>
            </div>
    
    )
}

export default  Hero