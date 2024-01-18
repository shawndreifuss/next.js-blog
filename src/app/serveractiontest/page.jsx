import { addpost } from "@/lib/action"


const serverAction = () => {


  return (
    <div>
        <form action={addpost}>
            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="desc" name="desc" />
            <input type="text" placeholder="slug" name="slug"/>
            <input type="text" placeholder="userId" name="userId"/>
            <button>Create</button>
        </form>
    </div>
  )
}

export default serverAction