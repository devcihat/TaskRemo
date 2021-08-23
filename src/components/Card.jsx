import React, { useState, useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DataContext } from "./DataProvider";
import KanbanModal from "../components/KanbonModal";
import Done from "./Done";
import InProgress from "./InProgress";

import Todo from "./Todo";

function Card() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useContext(DataContext);
  const openModal = () => {
    setOpen(true);
  };
  const onDragEnd = (result) => {
    const {source,destination} = result

    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, active = todos

    if(source.droppableId === 'TodosList') {
      add = active[source.index]
      active.splice(source.index,1)
    }
  };

  return (
    <DragDropContext >
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
            <Todo />
            <InProgress />
            <Done />
          </dl>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Card;
