"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
interface Todo {
  id: number;
  title: string;
}
export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
    </div>
  );
}
