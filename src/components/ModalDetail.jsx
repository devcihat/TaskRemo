import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function ModalDetail() {
  const { todo } = useContext(DataContext);
  const [todos, setTodos] = todo;
  const [todoAssignee, setTodoAssignee] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    function generateRandomInteger(max) {
      return Math.floor(Math.random() * max) + 1;
    }

    let _id = generateRandomInteger(10);
    setTodos([...todos, { name: todoDescription, id: _id.toString(), complate: false }]);
  };

  return (
    <div className="shadow overflow-hidden sm:rounded-lg">
      <div className="  px-4 py-5 sm:p-0">
        <form autoComplete="off" onSubmit={addTodo}>
          <dl className=" sm:divide-gray-200">
            <hr />
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">Assignee</dt>
              <input
                onChange={(e) => setTodoAssignee(e.target.value)}
                value={todoAssignee}
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">Due date</dt>
              <input
                onChange={(e) => setTodoDueDate(e.target.value)}
                value={todoDueDate}
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">Priority</dt>
              <input
                onChange={(e) => setTodoPriority(e.target.value)}
                value={todoPriority}
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Assignee</dt>
            <input className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div> */}
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">Description</dt>
              <input
                onChange={(e) => setTodoDescription(e.target.value)}
                value={todoDescription}
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
            <hr />
          </dl>
        </form>
      </div>
    </div>
  );
}
