import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Files() {
  return (
    <div>
      <p className="text-white mb-3">Files</p>
      <div className="flex">
        <li
          style={{
            border: "2px dashed #FFFFFF80",
            listStyleType: "none",
          }}
          class="col-span-1 border-dashed mx-4   divide-y "
        >
          <div>
            <div class="  p-10  ">
              <a href="#" style={{ color: "#FFFFFF80" }}>
                + 
              </a>
            </div>
          </div>
        </li>
        <li
          style={{
            border: "2px solid #FFFFFF80",
            listStyleType: "none",
            background:'white'
          }}
          class="col-span-1 border-dashed   divide-y "
        >
          <div>
            <div class="  p-10  ">
              <a href="#" style={{ color: "#FFFFFF" }}>
                + 
              </a>
            </div>
          </div>
     
        </li>
       
      </div>
      <hr className='mt-6' />
      
    </div>
  );
}

export default Files;
