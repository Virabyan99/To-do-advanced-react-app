import { createContext, useEffect, useState } from 'react'
import { Todo } from '../lib/types'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

type TodosContextProviderProps = {
  children: React.ReactNode
}
type TTodosContext = {
  todos: Todo[]
  totaoNmberOfTodo: number
  numberOfCompletedTodos: number
  handleToggleTodo: (id: number) => void
  handleAddTodo: (todoText: string) => void
  handleDeleteTodo: (id: number) => void
}

export const TodosContext = createContext<TTodosContext | null>(null)

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    return JSON.parse(savedTodos)
  } else {
    return []
  }
}

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const {isAuthenticated} = useKindeAuth()
  // state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

  // derived state
  const totaoNmberOfTodo = todos.length
  const numberOfCompletedTodos = todos.filter((todo) => todo.isCompleted).length
  // event handlers // actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert('Login to add more than 3 todos')
      return
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ])
    }
  }
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      })
    )
  }
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  //   // side effects

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider
      value={{
        todos,
        totaoNmberOfTodo,
        numberOfCompletedTodos,
        handleToggleTodo,
        handleAddTodo,
        handleDeleteTodo,
      }}>
      {children}
    </TodosContext.Provider>
  )
}
