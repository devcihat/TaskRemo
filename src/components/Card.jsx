import React from "react";

import { FaBoxOpen, FaPencilAlt, FaAlignJustify } from "react-icons/fa";

function Card() {
  return (
    <div class="">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            <li
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
              }}
              class="col-span-1   divide-y divide-gray-200"
            >
              <div class="w-full flex items-center justify-between p-6 space-x-6">
                <div class="flex-1 truncate">
                  <div class="flex items-center space-x-2">
                    <h3
                      style={{ color: "rgba(255, 255, 255, 0.5)" }}
                      class=" text-md font-medium truncate"
                    >
                      <FaBoxOpen />
                    </h3>
                    <h3 class="text-white text-sm font-medium truncate">
                      Get things done
                    </h3>
                  </div>
                </div>
                <FaPencilAlt color="rgba(255, 255, 255, 0.5)" />
              </div>
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
            <li
              style={{ background: "rgba(255, 255, 255, 0.05)" }}
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
                    <FaBoxOpen color="#FFFFFF80" size={24} className="mt-4" />
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{ border: "2px dashed #FFFFFF80" }}
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
