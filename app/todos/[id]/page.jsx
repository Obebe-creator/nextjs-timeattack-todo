import Link from "next/link";

export default async function TodoDetailpage({ params }) {
  const { id } = await params;

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
