import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (

      <div className="flex bg-slate-200 items-center justify-center  animate-fade-in">
      <div className="relative">
      <Image 
            src='/logo.png'
             alt='logo'
             width={70}
             height={20}/>
      </div>
    </div>
  );
};

export default NavBar;
