import React, { useState, useContext } from "react";

import {
  FaBoxOpen,
  FaPencilAlt,
  FaAlignJustify,
  FaAngleDown,
} from "react-icons/fa";
import KanbanModal from "../components/KanbonModal";
import { DataContext } from "./DataProvider";
import ListItem from "./ListItem"

function Card() {
  const [todos, setTodos] = useContext(DataContext);
  console.log(todos);

  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        {open ? (
          <KanbanModal
            hide={() => setOpen(false)}
            open={open}
            closeModal={openModal}
          />
        ) : (
          ""
        )}
        <button
          onClick={openModal}
          style={{ marginLeft: "1200px", marginTop: "20px" }}
          type="button"
          class="inline-flex items-center px-3 py-2  text-sm leading-4 font-medium rounded-md text-white bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500"
        >
          New Task
        </button>
      </div>
      <div class="py-12">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <dt>
                <button
                  style={{ border: "2px solid rgba(255, 255, 255, 0.5)" }}
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
                >
                  <FaAngleDown color="#FFFFFF" size={18} className="mx-1" />
                  To do
                </button>
                <li
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "8px",
                    listStyleType: "none",
                  }}
                  class="col-span-1  divide-y "
                >
                  {todos.map((todo,index) => (
                      <ListItem todo={todo} key={index} id={index} />
                  ))}
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

            <div>
              <dt className="mb-4">
                <button
                  style={{ border: "2px solid #B99539" }}
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white  "
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
                class="col-span-1   divide-y divide-gray-200"
              >
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                  <div class="flex-1 truncate">
                    <div class="flex items-center space-x-2">
                      <h3
                        style={{ color: "#B99539" }}
                        class=" text-md font-medium truncate"
                      >
                        <FaBoxOpen />
                      </h3>
                      <h3 class="text-white text-sm font-medium truncate">
                        Finish the assignments
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="w-0 flex-1 flex">
                    <div className="flex">
                      <FaBoxOpen
                        color="#FFFFFF80"
                        size={24}
                        className="mt-4 mx-3"
                      />
                      <FaBoxOpen
                        color="#FFFFFF80"
                        size={24}
                        className="mt-4 mb-2"
                      />
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
          </dl>
        </div>
      </div>
    </>
  );
}

export default Card;
