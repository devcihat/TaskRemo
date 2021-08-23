import React, { useContext, useRef, useState } from "react";
import {
  FaBoxOpen,
  FaPencilAlt,
  FaAlignJustify,
  FaAngleDown,
} from "react-icons/fa";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";
import { Droppable } from "react-beautiful-dnd";

export const Todo = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  const handleDragStart = (e, params) => {
    console.log("Drag Start", params);

    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
    setDragging(true);
  };

  const handleDragEnter = (e, params) => {
    console.log("entering draging", params);
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      console.log("eşit değil");
      setTodos(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));

        
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("ending drah");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragStart);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.todo === params.todo &&
      currentItem.index === params.index
    ) {
      return "current bg-red-700";
    }
    return "bg-indigo-800";
  };

  return (
    <div>
      <dt>
        <button
          style={{ border: "2px solid rgba(255, 255, 255, 0.5)" }}
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
        >
          <FaAngleDown color="#FFFFFF" size={18} className="mx-1" />
          To do
          <p className="mx-2">{todos.length}</p>
        </button>

        <li
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "8px",
            listStyleType: "none",
          }}
          className="col-span-1  divide-y "
        >
          {todos.map((todo, index) => (
            <div
              className={dragging ? getStyles(todo, index) : ""}
              key={index}
              draggable
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { todo, index });
                    }
                  : null
              }
              onDragStart={(e) => handleDragStart(e, { todo, index })}
            >
              <ListItem todo={todo} key={index} />
            </div>
          ))}

          <div>
            <div className="flex ">
              <div className="w-0 flex-1 flex">
                <div className="flex mx-2 -space-x-1 justify-center  relative z-0 items-center">
                  <img
                    className="relative z-30 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-20 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-10 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-0 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <p className="text-sm text-white ml-4 ">17 Feb</p>
                  </div>
                </div>
              </div>

              <div className=" w-0 flex-1 flex">
                <a className="relative w-0 flex-1 ml-32 flex items-center justify-center py-4 text-sm font-medium  ">
                  <FaAlignJustify color="rgba(255, 255, 255, 0.5)" />
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      borderRadius: "8px",
                    }}
                    className="mx-1"
                  >
                    2
                  </p>
                </a>
              </div>
            </div>
          </div>
        </li>
        <div className="mx-auto text-center pt-2 items-center">
          <p style={{ color: "#FFFFFF80" }} className=" block">
            + Add
          </p>
        </div>
      </dt>
    </div>
  );
};

export default Todo;
