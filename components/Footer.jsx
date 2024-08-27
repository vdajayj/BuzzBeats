import React from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
      <div className="footer-container">
        <p>2024 BuzzBeats All rights reserved</p>
        <p className="icons">
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram/>
          </Link>
          <Link href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter/>
          </Link>
        </p>
      </div>
  )
}
export default Footer
