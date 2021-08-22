import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function ModalDetail() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoAssignee, setTodoAssignee] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name:todoDescription,complate:false}])
  }

  return (
    <div className="shadow overflow-hidden sm:rounded-lg">
      <div className="  px-4 py-5 sm:p-0">
       <form autoComplete='off' onSubmit={addTodo}>
       <dl className=" sm:divide-gray-200">
          <hr />
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Assignee</dt>
            <input
              onChange={(e) => setTodoAssignee(e.target.value)}
              value={todoAssignee}
              class="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Due date</dt>
            <input
              onChange={(e) => setTodoDueDate(e.target.value)}
              value={todoDueDate}
              class="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Priority</dt>
            <input
              onChange={(e) => setTodoPriority(e.target.value)}
              value={todoPriority}
              class="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Assignee</dt>
            <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div> */}
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Description</dt>
            <input
              onChange={(e) => setTodoDescription(e.target.value)}
              value={todoDescription}
              class="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
