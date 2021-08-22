import React from "react";
import { FaBoxOpen, FaPencilAlt } from "react-icons/fa";

export const ListItem = ({todo,id}) => {
  return (
    <div class="w-full mt-4 flex items-center justify-between p-4">
      <div class=" truncate">
        <div class="flex items-center ">
          <button className="flex space-x-2">
            <h3
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              class=" text-md font-medium "
            >
              <FaBoxOpen />
            </h3>
            <h3 class="text-white text-sm font-medium ">{todo.name}</h3>
          </button>
        </div>
      </div>
      <FaPencilAlt color="rgba(255, 255, 255, 0.5)" />
    </div>
  );
};

export default ListItem;
