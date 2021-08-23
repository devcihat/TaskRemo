import React, { useContext } from "react";
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


  return (
    <div>
      <dt>
        <button
          style={{ border: "2px solid rgba(255, 255, 255, 0.5)" }}
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
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
          class="col-span-1  divide-y "
        >
          <Droppable droppableId='TodosList'>
          {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo, index) => (
                  <div>
                    <ListItem todo={todo} key={index} />
                  </div>
                ))}
                 {provided.placeholder}
                </div>
          )}
         
          </Droppable>
          <div>
            <div class="flex ">
              <div class="w-0 flex-1 flex">
                <div class="flex mx-2 -space-x-1 justify-center  relative z-0 items-center">
                  <img
                    class="relative z-30 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="relative z-20 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="relative z-10 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="relative z-0 inline-block h-4 w-4 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <p className="text-sm text-white ml-4 ">17 Feb</p>
                  </div>
                </div>
              </div>

              <div class=" w-0 flex-1 flex">
                <a class="relative w-0 flex-1 ml-32 flex items-center justify-center py-4 text-sm font-medium  ">
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
