import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black-200">
      <nav className="mx-auto flex max-w-2xl gap-16 px-6 py-2">
        <Link href="/">HOME</Link>
        <Link href="/todos">Todo 목록</Link>
        <Link href="/todos/new">Todo 추가</Link>
      </nav>
    </header>
  );
}
