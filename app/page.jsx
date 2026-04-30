import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-3xl font-bold">Todo List Main</h1>
        <p className="text-center font-bold">서비스 소개</p>
        <p className="text-center">Todo List 관리 앱</p>
      </div>
      <Link href="/todos">Todo 목록보기</Link>
    </section>
  );
}
