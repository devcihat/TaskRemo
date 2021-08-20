import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

function Subtask() {
  return (
    <div>
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <button
            style={{ border: "2px solid rgba(255, 255, 255, 0.5)" }}
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  "
          >
            <FaAngleDown color="#FFFFFF80" size={18} className="mx-1" />
            Substask
          </button>
        </div>
      </div>
      <div className=" pb-2 sm:pb-5">
        <div className="max-w-4xl ">
          <div className="p-2 rounded-lg  shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg ">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">
                    Finish all the assignments
                  </span>
                </p>
              </div>

              <div className="justify-around flex">
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6  "
                  aria-hidden="true"
                />
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6 mx-6"
                  aria-hidden="true"
                />
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6 "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-2 sm:pb-5">
        <div className="max-w-4xl ">
          <div className="p-2 rounded-lg  shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg ">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">
                    Finish all the assignments
                  </span>
                </p>
              </div>

              <div className="justify-around flex">
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6  "
                  aria-hidden="true"
                />
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6 mx-6 "
                  aria-hidden="true"
                />
                <SpeakerphoneIcon
                  style={{ color: "#FFFFFF26" }}
                  className="h-6 w-6 "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className=" mt-4 ml-3 pt-2 items-center">
            <p style={{ color: "#FFFFFF80" }} className=" block">
              + Add
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtask;
