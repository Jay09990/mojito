import React from "react";
import { navLinks } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(()=>{
    const navtween = gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top',

      }
    })

    navtween.fromTo('nav', {backgroundColor:'transparent'},{
      backgroundColor:'#00000050',
      backgroundFilter: 'blur(10px)',
      duration:1,
      ease:'power1.inOut'
    })
  })
  return (
    <nav>
      <div>
        <a hr ef="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>velvet pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
