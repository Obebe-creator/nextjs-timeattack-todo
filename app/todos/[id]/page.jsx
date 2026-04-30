export default function TodoDetailpage({ params }) {
  return (
    <div>
      <h1>Todo 상세</h1>
      <p>Todo id: {params.id}</p>
    </div>
  );
}
