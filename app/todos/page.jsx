import TodoCard from "@/components/TodoCard";

export default async function TodosPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
  );

  const todos = await res.json();
  const categories = await categoriesRes.json();

  return (
    <div>
      <h1>Todo 목록</h1>

      <ul className="grid grid-cols-2 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} categories={categories} />
        ))}
      </ul>
    </div>
  );
}
