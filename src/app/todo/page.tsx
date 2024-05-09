"use client";

import Link from "next/link";
import { useState } from "react";

const TodoPage = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    {
      title: "First todo",
      id: `id-${Date.now()}`,
    },
  ]);

  const handleAddTodo = () => {
    setTodoList((pre) => [...pre, { id: `id-${Date.now()}`, title: todo }]);
    setTodo("");
  };
  const handleDelete = (myId: string) => {
    setTodoList(todoList.filter(({ id }) => id !== myId));
  };

  return (
    <div className="h-[100vh] flex flex-col items-center mt-20">
      <Link className="bg-red-500 absolute top-3 left-3 px-3 p-1 rounded-sm" href={"/"} >go back</Link>
      <h1 className="text-2xl font-bold">TODO Page</h1>
      <div className="border-red-50 border mt-5 m-1 p-5 max-w-[700px] w-[100%]">
        <div className="flex gap-2">
          <input
            className="p-1 text-black w-full rounded-sm"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button
            className="bg-green-400 text-black p-1 rounded-sm min-w-28 font-bold"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-1">
          {todoList?.map(({ id, title }) => (
            <div
              className="w-full bg-gray-800 rounded-sm p-1 px-2 flex justify-between"
              key={id}
            >
              <span>{title}</span>
              <button
                className="p-1 px-2 bg-red-400 rounded-sm"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
