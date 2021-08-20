import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import { FaAngleDown } from "react-icons/fa";
import ModalDetail from "./ModalDetail";
import Files from "./Files";
import Subtask from "./Subtask";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const KanbanModal = (props) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={props.hide}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div
                  style={{ background: "#242424" }}
                  className="h-full flex flex-col shadow-xl overflow-y-scroll"
                >
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <button
                        style={{ border: "2px solid rgba(255, 255, 255, 0.5)" }}
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  "
                      >
                        <FaAngleDown
                          color="#FFFFFF80"
                          size={18}
                          className="mx-1"
                        />
                        To do
                      </button>
                      <h2
                        id="slide-over-heading"
                        className="text-lg font-medium text-white"
                      >
                        Get things done
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className=" rounded-md text-gray-400 "
                          onClick={() => props.hide(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}

                  <div>
                    <ModalDetail />
                    <div className="pb-1 sm:pb-6">
                      <div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end  sm:px-6">
                          <div className="sm:flex-1">
                            <Files />

                            <Subtask />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default KanbanModal;
