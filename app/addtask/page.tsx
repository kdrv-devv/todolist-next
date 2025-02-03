"use client"
import { useRouter } from 'next/navigation'
import { FaArrowLeftLong } from "react-icons/fa6";

const AddTask = () => {

    const router = useRouter()


  return (
    <section className="add-page">
      <header className="todo-header sticky top-0  bg-[#9395d3]">
        <div className="container flex items-center gap-[37px]  py-5">
          <button onClick={() => router.push("/")} className="font-[600] text-[30px] text-[#fff]">
            <FaArrowLeftLong />
          </button>
          <h2 className="font-[600] text-[25px] text-[#fff]">Add Task</h2>
        </div>
      </header>

      {/* start add task main section */}

      <section className="add-task-container">
        <div className="container pt-[30px] min-h-[500px]">
          <form className="flex flex-col gap-[50px]" action="">
            <div className="flex flex-col gap-[30px] text-[#8b8787] font-[400] text-[16px]">
              <input className="outline-none border-b-2 pb-[10px] border-[#8B8787] " type="text" placeholder="Title" />
              <input className="outline-none border-b-2 pb-[10px] border-[#8B8787]" type="text" placeholder="Detail" />
            </div>
            <button className="shadow-md font-[600] text-[20px] text-[#fff] bg-[#9395d3] rounded-[15px] w-full h-[65px]">ADD</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default AddTask;
