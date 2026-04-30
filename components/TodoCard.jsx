import Link from "next/link";

export default function TodoCard({ todo }) {
  return (
    <li key={todo.id} className="rounded-md border border-black-100 p-4">
      <Link href={`/todos/${todo.id}`}>
        <h2 className="font-semibold">{todo.title}</h2>
      </Link>
      <div className="mt-2 flex gap-2 text-xs text-gray-500">
        <span>카테고리: {todo.category}</span>
        <span>우선순위: {todo.priority}</span>
      </div>
      <span className="text-sm text-gray-500">
        {todo.completed ? "완료" : "진행중"}
      </span>

      <p className="mt-2 text-sm text-black-200">{todo.content}</p>
    </li>
  );
}
