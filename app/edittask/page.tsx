"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TaskType } from "../@types";

const EditTask = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // URL'dan `id` olish

  // Barcha hook'lar bir xil tartibda ishlashi uchun tepa qismga yozildi
  const [updateTask, setUpdateTask] = useState("");
  const [updateDescrip, setUpdateDescrip] = useState("");

  useEffect(() => {
    if (id) {
      const tasks = JSON.parse(localStorage.getItem("tasks") as string) || [];
      const task = tasks.find((t: TaskType) => t.id == id);
      if (task) {
        setUpdateTask(task.title);
        setUpdateDescrip(task.descrip);
      }
    }
  }, [id]);

  const saveTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") as string) || [];
    const updatedTasks = tasks.map((t: TaskType) =>
      t.id == id ? { ...t, title: updateTask, descrip: updateDescrip } : t
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    router.push("/");
  };

  return (
    <section className="add-page">
      <header className="todo-header sticky top-0 bg-[#9395d3]">
        <div className="container flex items-center gap-[37px] py-5">
          <button
            onClick={() => router.push("/")}
            className="font-[600] text-[30px] text-[#fff]"
          >
            <FaArrowLeftLong />
          </button>
          <h2 className="font-[600] text-[25px] text-[#fff]">Edit Task</h2>
        </div>
      </header>

      {/* start add task main section */}
      <section className="add-task-container">
        <div className="container pt-[30px] min-h-[500px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveTask();
            }}
            className="flex flex-col gap-[50px]"
          >
            <div className="flex flex-col gap-[30px] text-[#8b8787] font-[400] text-[16px]">
              <input
                className="outline-none border-b-2 pb-[10px] border-[#8B8787]"
                type="text"
                placeholder="Title"
                value={updateTask}
                onChange={(e) => setUpdateTask(e.target.value)}
              />
              <input
                className="outline-none border-b-2 pb-[10px] border-[#8B8787]"
                type="text"
                placeholder="Detail"
                value={updateDescrip}
                onChange={(e) => setUpdateDescrip(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="update shadow-md font-[400] text-[15px] text-[#fff] bg-[#9395d3] transition-all active:bg-[#5b5d91] rounded-[15px] w-[47%] h-[65px]"
              >
                Update
              </button>
              <button
                onClick={() => router.push("/")}
                className="cancel shadow-md font-[400] text-[15px] text-[#fff] bg-[#9395d3] transition-all active:bg-[#5b5d91] rounded-[15px] w-[47%] h-[65px]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default EditTask;
