import React, { useContext } from "react";
import { FaBoxOpen, FaAngleDown } from "react-icons/fa";
import { DataContext } from "./DataProvider";
import ListProgress from "./ListProgress";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const InProgress = () => {
  const { _inProgress } = useContext(DataContext);
  const [inProgress, setInProgress] = _inProgress;

  
  return (
    <div>
      <dt className="mb-4">
        <button
          style={{ border: "2px solid #B99539" }}
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
        >
          <FaAngleDown color="#E5E5E5" size={18} className="mx-1" />
          In progress
        </button>
      </dt>
      <li
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          listStyleType: "none",
          borderRadius: "8px",
        }}
        className="col-span-1   divide-y divide-gray-200"
      >
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          {inProgress.length > 0
            ? inProgress.map((progress, index) => (
                <div key={index}>
                  <ListProgress progress={progress} key={index} />
                </div>
              ))
            : ""}
        </div>
        <div>
          <div className="w-0 flex-1 flex">
            <div className="flex">
              <FaBoxOpen color="#FFFFFF80" size={24} className="mt-4 mx-3" />
              <FaBoxOpen color="#FFFFFF80" size={24} className="mt-4 mb-2" />
            </div>
          </div>
        </div>
      </li>
      <div className="mx-auto text-center pt-2 items-center">
        <p style={{ color: "#FFFFFF80" }} className="block">
          + Add
        </p>
      </div>
    </div>
  );
};

export default InProgress;
