import { useState } from 'react'
import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import ToDoList from './ToDoList'

function App() {
  
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: 'Buy Groceries',
        isCompleted: false,
      },
      {
        id: 2,
        text: 'Walk the dog',
        isCompleted: true,
      },
      {
        id: 3,
        text: 'Read some books',
        isCompleted: false,
      },
    ])

  return (
    <div className=" flex flex-col justify-center items-center font-sans min-h-screen bg-[#f1d4b3]">
      <BackgroundHeading />
      
      <main className=" relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />
        <ToDoList todos={todos} setTodos={setTodos} />
        <Sidebar todos={todos} setTodos={setTodos} />
      </main>

      <Footer />
    </div>
  )
}

export default App
