"use client";

import { useTodos } from "@/lib/hooks/useTodos";

export default function Todos() {
  const { data, error, isLoading } = useTodos();

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
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
