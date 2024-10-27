"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
interface Todo {
  id: number;
  title: string;
}

export default function Todos() {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data);
  };
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div>
      <h1>Todos</h1>
      {/* {error && <p>{error}</p>} */}
      {data &&
        data?.length > 0 &&
        data.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
    </div>
  );
}
