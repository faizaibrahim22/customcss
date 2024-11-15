import React from "react";
import Link from "next/link";

const Navbar =()=>{
    return (
        <>
        <header className="nav">
            <div className="logo">
                <h1 className="text-slate-950 font-semibold"> FAIZA QURESHI</h1>
            </div>
            <div className="navigate">
                <ul>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/project">Projects</Link></li>
                </ul>
            </div>
          <div className="btn"></div>
      <button className="bt">Download CV</button>
        </header>
        </>
    )
}

export default Navbar