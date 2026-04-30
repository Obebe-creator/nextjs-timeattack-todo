import Link from "next/link";

export default function TodoDetailpage({ params }) {
  return (
    <div>
      <div>
        <Link href="/todos">목록으로 돌아가기</Link>
      </div>
      <div>
        <h1>Todo 상세</h1>
        <p>Todo id: {params.id}</p>
      </div>
    </div>
  );
}
