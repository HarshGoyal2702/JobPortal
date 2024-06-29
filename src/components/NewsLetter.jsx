import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaEnvelopeOpenText/> Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor aliquid perspiciatis nulla.</p>
        <div className="w-full space-y-4">
        <input type="email" name="email" placeholder="name@email.com" className="w-full block py-2 pl-3 border focus:outline-none" />
        <input type="submit" value={"Subscribe"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue cursor-pointer rounded-sm text-white font-semibold" />
        </div>
       
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaRocket/> Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor aliquid perspiciatis nulla.</p>
        <div className="w-full space-y-4">
        
        <input type="submit" value={"upload your Resume"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue cursor-pointer rounded-sm text-white font-semibold" /></div>
      </div>

    </div>
  );
};

export default NewsLetter;
