export default async function TodosPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  const todos = await res.json();

  return (
    <div>
      <h1>Todo 목록</h1>

      <ul className="grid grid-cols-2 gap-4">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded-md border border-black-100 p-4">
            <h2 className="font-semibold">{todo.title}</h2>
            <div className="mt-2 flex gap-2 text-xs text-gray-500">
              <span>카테고리: {todo.category}</span>
              <span>우선순위: {todo.priority}</span>
            </div>
            <span className="text-sm text-gray-500">
              {todo.completed ? "완료" : "진행중"}
            </span>

            <p className="mt-2 text-sm text-black-200">{todo.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
