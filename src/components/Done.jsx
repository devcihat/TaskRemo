import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Done = () => {
  return (
    <div>
      <div>
        <dt className="mb-4">
          <button
            style={{ border: "2px solid #3EBE79" }}
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
          >
            <FaAngleDown color="#E5E5E5" size={18} className="mx-1" />
            Done
          </button>
        </dt>
        <li
          style={{
            border: "2px dashed #FFFFFF80",
            listStyleType: "none",
          }}
          class="col-span-1 border-dashed   divide-y "
        >
          <div>
            <div class="  p-10 mx-32 ">
              <a href="#" style={{ color: "#FFFFFF80" }}>
                + Add
              </a>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Done;
