type DeleteButtonprops = {
  id: number,
  handleDeleteTodo: (id: number) => void
}


export default function DeleteButton({ onDeleteTodo, id }: DeleteButtonprops) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id)
      }}>
      ❌
    </button>
  )
}
