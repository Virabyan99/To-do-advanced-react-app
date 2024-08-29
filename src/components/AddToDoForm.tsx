import Button from "./Button";

export default function AddToDoForm({todos, setTodos}) {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()

    }}>
      <h2 className="font-medium text-[#231d15] ">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full "
        value='test'
      />
      <Button>Add to List</Button>
    </form>
  )
}
