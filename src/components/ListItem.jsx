import React from "react";

import { FaBoxOpen, FaPencilAlt } from "react-icons/fa";

export const ListItem = ({ todo }) => {

  const handleDragStart = (e) => {
    console.log('Drag Starting')
  }

  return (
    <div className="w-full mt-4 flex items-center justify-between p-4">
      <div className=" truncate">
        <div  className="flex items-center ">
          <button   className="flex space-x-2">
            <h3
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              className=" text-md font-medium "
            >
              <FaBoxOpen />
            </h3>
            <h3 className="text-white text-sm font-medium ">{todo.name}</h3>
          </button>
        </div>
      </div>
      <FaPencilAlt color="rgba(255, 255, 255, 0.5)" />
    </div>
  );
};

export default ListItem;
