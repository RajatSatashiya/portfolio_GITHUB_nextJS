import React from "react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="nav2">
      <h3>Portfolio...</h3>
      <ul className="nav-list">
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li className="resume">
          <a
            href="./pdf/resume.pdf"
            target="_blank"
            download
            className="resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
