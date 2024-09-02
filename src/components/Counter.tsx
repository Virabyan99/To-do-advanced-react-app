import { useTodosContext } from '../lib/hooks'

export default function Counter() {
  const { totaoNmberOfTodo, numberOfCompletedTodos } = useTodosContext()
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totaoNmberOfTodo} todos completed
    </p>
  )
}
